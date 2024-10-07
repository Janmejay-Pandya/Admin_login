const { z }=require("zod");
//creating obejct schema for validation
const signupSchema = z.object({
    username: z.string({ required_error: "Name is Required" }).trim().min(3, { message: "Name must be of atleast 3 characters" }),
    email: z
        .string({ required_error: "Email is Required" }).trim().email({ message: "Invalid email address" }).min(3, { message: "email must be of atleast 3 characters" }).max(255, { message: "Email must not exceed more than 255 characters" }),
    phone: z
        .string({ required_error: "phone is Required" }).trim().min(10, { message: "Phone must be of atleast 10 characters" }),
    password: z
        .string({ required_error: "Password is Required" }).min(7, { message: "Password must be of atleast 6 characters" }).max(255, { message: "Password cannot be greater than 255 characters" }),
    
});
module.exports = signupSchema;