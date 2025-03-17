const mongoose = require('mongoose');

async function connect(){
    try{
        // await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        await mongoose.connect('mongodb://localhost:27017/real-esate-web');

        console.log("Connect successfully");
    } catch(error){
        console.log("Connect failure")
    }
}

module.exports = {connect};