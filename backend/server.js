const express = require("express");
const cors = require("cors");
const path = require("path");

const weatherRoutes = require("./routes/weather");
const trafficRoutes = require("./routes/traffic");
const eventRoutes = require("./routes/events");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/weather", weatherRoutes);
app.use("/api/traffic", trafficRoutes);
app.use("/api/events", eventRoutes);

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,"public","index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
console.log("Server running");
});
