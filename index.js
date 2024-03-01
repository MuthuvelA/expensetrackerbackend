const express = require('express')
const app = express()

const static = express.static("static")
app.use("/",static)

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true})) // form data

//http://127.0.0.1:8000/hi?phone=7
    // Host: 127.0.0.1 --> local host
    // Port: 8000
    // Path: /hi
    // ?phone=7 key=value

app.get("/hi", (req, res) => {
    console.log(req.query)
    res.json(req.query)
});

    // res.json({
    //     name:req.query.name,            ...req.query          ...  -> spread operator      it will atuomate for further values
    //     description: req.query.description,
    //     date: req.query.date,
    //     amount:req.query.amount,
    // });
    // const {amount} = req.query;
    // amount;     or Price: amount;



app.post("/hi", (req, res) => {

    console.log(req.body)
    res.json({
        name:req.body.name,
        description: req.body.description,
        date: req.body.date,
        amount:req.body.amount,
         });
});

// app.get("/todos",(req,res) => {
//     fetch()
// } )


app.listen(8000, () =>{
    console.log("App Running");
});