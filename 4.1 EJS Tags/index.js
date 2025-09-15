import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
// import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["Banana", "Cherry", "Apple"],
        htmlContent: "<em>This is some italic text</em>",
        __dirname: __dirname 
    };
    res.render((__dirname + "/views/index.ejs"), data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});