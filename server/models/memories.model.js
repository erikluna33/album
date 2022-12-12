const mongoose = require('mongoose');

const MemorySchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "A memory's name is required"],
        minLength: [3, "Memory' length must be at least 3 characters!"]
    },
    image:{
        type: String,
        required:[true, "We need a picture"]
    },
    summary:{
        type: String,
        required: [true,"We need a summary of this memory" ]
    },
    location:{
        type: String,
        required:[true, "Need a location"]
    },
    continentLocation:{
        type: String,
        required: [true, "Need a continent location"],
        enum:[
            "Asia",
            "North America",
            "South America",
            "Africa",
            "Europe",
            "Antartica",
            "Oceania"
        ]
    }

},{timestamps:true});

const MemoryModel = mongoose.model("Memory", MemorySchema);
module.exports = MemoryModel;