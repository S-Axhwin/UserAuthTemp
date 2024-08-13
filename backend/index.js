const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRouter = require("./router/UserRouter");

const app = express();


app.use(cors({
    credentials: true,
    origin: ["http://localhost:5173"],
}));

app.use(express.json());
app.use(cookieParser({
    credentials: true
}));

app.use("/api/v1/user", userRouter);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log("Listing on port", PORT);
});
