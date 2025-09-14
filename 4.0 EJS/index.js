import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";
import ejs from "ejs";


const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const todayDate = new Date("2025-09-15");
const currentDay = todayDate.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var whatToDoToday = "";

app.use(bodyParser.urlencoded({ extended: true }));

function learnDay() {
    if ( currentDay === 0 || currentDay === 6) {
        whatToDoToday = `It's ${dayNames[currentDay]}, - a weekend, lets party hard!`;
    } else {
        whatToDoToday = `It's ${dayNames[currentDay]}, - a week day, lets work and earn!`;
    }
    return whatToDoToday;
}

app.get("/", (req, res) => {
    res.render((__dirname + "/views/index.ejs"), 
    { weekday: learnDay() }
    );
});

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
}); 
