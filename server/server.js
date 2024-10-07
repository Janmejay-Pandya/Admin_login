const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const authRoute = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');
const contactRoute = require("./router/contact-router");

//lets tackle CORS
const corsOption = {
    origin: "http://localhost:5173",
    methods: "GET,POST, PUT, DELETE,PATCH,HEAD",
    credentials: true,
};
app.use(cors(corsOption));
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);//important line to add in the main server.js
connectDb().then(() => {
    app.listen(port, () => {
        console.log("Server started on port", port);
    });
});