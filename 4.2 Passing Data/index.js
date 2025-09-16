import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
//import { mkdir } from "fs";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render((__dirname + "/views/index.ejs"), {
        name: "Andrew"
    });
});

app.post("/submit", (req, res) => {
    res.render((__dirname + "/views/index.ejs"), {
        firstName: req.body["fName"],
        array: req.body["fName"].split('').length
    });
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});