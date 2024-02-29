const express = require('express')
const app = express()

const static = express.static("static")
app.use("/",static)

app.listen(8000, () =>{
    console.log("App Running");
});