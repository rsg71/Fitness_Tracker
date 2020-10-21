//put one or two models here (exercises and workouts) and build out schema for models with the criteria. He says it's easier to do exercises as one, don't split. Make just workout model



const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: Date,
    exercises: Array
});


const Workout = mongoose.model("Workout", WorkoutSchema);




//somewhere here I will have to make a post route
//will also need a put route so that we can update

//also says that something shoudl have an id. I'm guessing this refers to teh workout


//stats show with get route for /api/workouts/range


module.exports = Workout;

