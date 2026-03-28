const express = require("express");
const router = express.Router();

/* 
Traffic API
Example:
http://localhost:5000/api/traffic/pune
*/

router.get("/:city", (req, res) => {

const city = req.params.city.toLowerCase();

let trafficData = {
city: city,
status: "",
message: ""
};

if(city === "mumbai"){
trafficData.status = "Heavy";
trafficData.message = "Heavy traffic near city center";
}

else if(city === "pune"){
trafficData.status = "Moderate";
trafficData.message = "Moderate traffic in main areas";
}

else if(city === "delhi"){
trafficData.status = "Heavy";
trafficData.message = "Traffic congestion on highways";
}

else{
trafficData.status = "Low";
trafficData.message = "Traffic flowing smoothly";
}

res.json(trafficData);

});

module.exports = router;