// bring in the DB connection and Trip Schema
const Mongoose = require('./db');
const Trip = require('./travlr');

// read see data from json file
var fs=require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf-8'));

// delete any existing records, then insert seed data
const seeDB = async() => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

// close mongodb connection and exit
seeDB().then(async() => {
    await Mongoose.connection.close();
    process.exit(0);
});
