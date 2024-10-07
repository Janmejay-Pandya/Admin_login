const User = require("../models/user-models")
const bcrypt = require("bcryptjs");
//user Register logic
const home = async (req, res) => {
    try {
        res.send("This is using router.route")
    } catch (error) {
        console.log(error);
        
    }
};
// Get Registration Data:
// Retrieve user data (username, email, password)
// Check Email Existence:
// Check if the email is already registered.
// Hash Password:Securely hash the password.
// Create User: Create a
// Save to DB: Save user data to the database.
// Respond: "Registration Successful " or handle errors.
// new user with hashed password.
const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email});
        if (userExist) {
            return res.status(400).json({ msg: "email already exists" });
        }
        //hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password,saltRound);
        const userCreated = await User.create({ username, email, phone, password });
        //added JWT code token :await userCreated.generateToken()
        res.status(201).json({
            msg: "registration successfull",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        });
    } catch (error) {
        res.status(500).json("internal server error");
    }
};

//user Login logic
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        // const user = await bcrypt.compare(password, userExist.password);  creating a function for this in user-model.js
        const user = await userExist.comparePassword(password);
        if (user) {
            res.status(201).json({
            msg: "registration successfull",
            token: await userExist.generateToken(),
            userId: userExist._id.toString()
            });
        }
        else {
            res.status(401).json("internal server error");
        }
    } catch (error) {
        res.status(500).json("internal server error");
    }
    
}
module.exports = { home, register,login };
