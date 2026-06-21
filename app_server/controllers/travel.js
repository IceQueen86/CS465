//var fs = require("fs");
//var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

/* GET Travel */
/* const travel = (req, res,) => {
  res.render("travel", { title: "Travlr Getaways", trips });
}; */

const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
  method: 'GET',
  headers: {
    Accept: "application/json",
  },
};

const travel = async function (req, res, next) {
  console.log("start");
  await fetch(tripsEndpoint, options)
    .then(res => res.json())
    .then(json => {
      //console.log(json);
      let message = null;
      if (!(json instanceof Array)){
        message= json;
        json=[];
      }else{
        if(!json.length){
            message="No trips exist in our database!";
        }
      }
      res.render("travel", { title: "Travlr Getaways", trips: json, message});
    })
    .catch(err => res.status(500).send(err.message));
};

module.exports = {
  travel,
};
