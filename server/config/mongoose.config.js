const mongoose = require('mongoose');
const databaseName = "memories";

mongoose.connect(`mongodb://localhost/${databaseName}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log("Connected to the databse")
    })
    .catch((err)=>{
        console.log("Error in connecting to the database");
    })