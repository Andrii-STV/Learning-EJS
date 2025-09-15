import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const currentDate = new Date();
const currentDayOfWeek = currentDate.getDay();
var toDo = "";


app.use(bodyParser.urlencoded({ extended: true }));

function whatToDoToday () {
    if (currentDayOfWeek == 0 || currentDayOfWeek == 6) {
        toDo = "It's the weekend! Let's party hard bro!";
    } else {
        toDo = "It's a working day. Work hard, earn your destiny!";
    }
    return toDo;
};

app.get("/", (req, res) => {
    // res.sendFile(__dirname + "/views/index.ejs")
    res.render((__dirname + "/views/index.ejs"), 
    {
        response: whatToDoToday()
    });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});