const express = require('express')
const app = express()

const static = express.static("static")
app.use("/",static)

app.get("/hi", (req, res) => {

    //http://127.0.0.1:8000/hi?phone=7
    // Host: 127.0.0.1 --> local host
    // Port: 8000
    // Path: /hi
    // ?phone=7 key=value

    console.log(req.query)
    res.json({
        name:req.query.name,
        description: req.query.description,
        date: req.query.date,
        amount:req.query.amount,
    });
});

app.listen(8000, () =>{
    console.log("App Running");
});