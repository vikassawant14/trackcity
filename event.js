const express = require("express")
const router = express.Router()
const axios = require("axios")

router.get("/:city", async(req,res)=>{

const city = req.params.city

try{

const response = await axios.get(
`https://app.ticketmaster.com/discovery/v2/events.json?city=${city}&apikey=YOUR_API_KEY`
)

res.json(response.data)

}catch(err){

res.status(500).json({error:"Event API error"})

}

})

module.exports = router