const Contact = require("../models/contact-models");
const contactForm = async (req, res) => {
    try {
        // res.send("Hello this is contact page")
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({ message: "message send successfully" });
    } catch (error) {
        return res.status(500).json({ message: "message not delivered" });
    }
};
module.exports = contactForm;