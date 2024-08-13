const { z } = require("zod");

const userModel = z.object({
    gmail: z.string().email(),
    password: z.string().min(6)
})

module.exports = userModel
