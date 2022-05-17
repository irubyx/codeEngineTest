"use strict";

const express = require("express")

// Constants
const port = 8080
const HOST = "0.0.0.0"

// App
const app = express()
app.get("/", (req, res) => {
    res.send("Hola mundo!")
})

app.listen(port, HOST)
console.log(`Corriendo en http://${HOST}:${port}`)
