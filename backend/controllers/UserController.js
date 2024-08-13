const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

const jwt = require("jsonwebtoken");

const userModel = require("../zod/UserModel");

const signup = async (req, res) => {
    const {gmail, password} = req.body;
    const typeCheck = userModel.safeParse({gmail,password});
    const mes = typeCheck.error?.issues.map(item => {
        return item.message
    });
    if(!typeCheck.success) return res.json({mes});

    try {
        const newUser = await prisma.user.create({
            data: {
                gmail,
                password
            }
        });
        return res.json({mes: `user created with gmail ${newUser.gmail}`});
    } catch(e) {
        // console.log(e);
        return res.json({mes: "gmail already exist in db. Please try to login", err: true})
    }

}

const login = async (req, res) => {
    const {gmail, password} = req.body;
    const typeCheck = userModel.safeParse({gmail,password});
    const mes = typeCheck.error?.issues.map(item => {
        return item.message
    });
    if(!typeCheck.success) return res.json({mes});

    const isUser = await prisma.user.findFirst({
        where: {
            gmail,
            password
        }
    });
    if(isUser == null) return res.json({mes: "invaild field(s)", err: true});

    const token = await jwt.sign({gmail: isUser.gmail}, process.env.KEY);
    res.cookie("token", token);
    return res.json({mes: "token send see it"});
}

const viewprofile = async (req, res) => {
    const {token} = req.cookies;
    if(!token) return res.json({mes: "token missing", err: true});

    try {
        const {gmail} = await jwt.verify(token, process.env.KEY);
        // console.log(isverifyed);
        const userData = await prisma.user.findFirst({
            where: {gmail}
        });
        res.json({userData});
    } catch(e) {
        // console.log(e);
        res.json({mes: "something went wrong"});
    }
}


module.exports = {
    login,
    signup,
    viewprofile
}
