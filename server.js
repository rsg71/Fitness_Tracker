const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));


const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });

app.use(express.static("public"));



//API Routes

//post /api/workouts

app.post("/api/workouts", function(req, res) {
    console.log("creating new workout")

    console.log(req.body)
    // db.Workout.
})

//put  /api/workouts/:id
app.put("/api/workouts/:id", function(req, res) {
    console.log("updating workout data")
    console.log("put req.params.id: ", req.params.id)
    console.log("put req.body: ", req.body)
})


//get  /api/workouts/range (last 7 days: limit 7)
app.get("/api/workouts/range", function(req, res) {
    console.log(req.body)

})


// HTML Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
})

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "public/stats.html"))
})

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "public/exercise.html"))
})


app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`)
})