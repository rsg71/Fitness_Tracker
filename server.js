const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");
var bodyParser = require("body-parser")

const app = express();

app.use(logger("dev"));

var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });

app.use(express.static("public"));


const databaseUrl = "workout";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});



//API Routes

//post /api/workouts

app.post("/api/workouts", jsonParser, function(req, res) {
    console.log("creating new workout")
    console.log("req.body is : ", req.body)
    

    db.workouts.insert({exercises}, (err, data) => {
        if(err) throw err;

        res.json(data)
    })
})

//put  /api/workouts/:id
app.put("/api/workouts/:id", jsonParser, function(req, res) {
    // console.log("updating workout data")
    // console.log("put req.params.id: ", req.params.id)
    // console.log("put req.body: ", req.body)

    // db.workouts.update({
    //     _id: mongojs.ObjectId(req.params.id)
    //   },
    //   {
    //     workout: req.body.workout
    //   },  function(err, data) {
    //     if(err) console.log(err)
    
    //     res.json(data)
    //   })
})


//get  /api/workouts/range (last 7 days: limit 7)
app.get("/api/workouts/range", function(req, res) {
    // console.log("the req.body is: ", req.body)

    // db.workouts.find({}, function(err, data) {
    //     if(err) throw err;
    
    //     res.json(data)
    //   });

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