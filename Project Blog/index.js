import express from "express";
import bodyParser from "body-parser";
// import { fileURLToPath } from "url";
// import { dirname } from "path";

const app = express();
const port = 3000;
//const __dirname = dirname(fileURLToPath(import.meta.url));
const postNameArray = [];
const postContentArray = [];

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {
        test: "Testing Template Connection"
    });
});

app.post("/submit", (req, res) => {
    postNameArray.push(req.body["post-name"]);
    postContentArray.push(req.body["post-content"]);
    res.render("blog.ejs", {
        postName: postNameArray,
        postContent: postContentArray
    });
});

app.post("/delete", (req, res) => {
    const id = parseInt(req.body.id);
    postNameArray.splice(id, 1);
    postContentArray.splice(id, 1);
    //res.redirect("/");
    res.render("blog.ejs", {
        postName: postNameArray,
        postContent: postContentArray
    });

});

app.post("/blog", (req, res) => {
    res.render("blog.ejs", {
        postName: postNameArray,
        postContent: postContentArray
    });
});

app.post("/add-blog", (req, res) => {
    res.redirect("/");
});


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});