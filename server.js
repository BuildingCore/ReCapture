//Developed by BuildingCore Studio, LLC.
//All Rights Reserved 
//
//

const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080

//Middleware
app.use(express.static("public"))

//Public Routes
app.get("/", (req, res) => {
    
})

//Private Router - App

//Private Router - SDK & API 

//Server Listening on PORT 8080
app.listen(PORT, () => {
    console.log(`The server is running on PORT ${PORT}`)
})