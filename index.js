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

// app.get("/hi", (req, res) => {
//     console.log(req.query)
//     res.json(req.query)
// });

    // res.json({
    //     name:req.query.name,            ...req.query          ...  -> spread operator      it will atuomate for further values
    //     description: req.query.description,
    //     date: req.query.date,
    //     amount:req.query.amount,
    // });
    // const {amount} = req.query;
    // amount;     or Price: amount;



// app.post("/hi", (req, res) => {

//     console.log(req.body)
//     res.json({
//         name:req.body.name,
//         description: req.body.description,
//         date: req.body.date,
//         amount:req.body.amount,
//          });
// });

// calling external 3rd Party API  --> API call
app.get("/todos", async(req,res) => {
    // fetch("https://jsonplaceholder.typicode.com/todos").
    // then((response) => response.json())
    // .then((json) => res.json(json));

    //asynchronous function
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos = await response.json();
    res.json(todos);


} );


//     /hi, /todos, /1 resources in Rest Terms
// app.get("/todos/2", async (req,res) => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/2")
//     const todos = await response.json();
//     res.json(todos);
// })

app.get("/todos/:id", async (req,res) => {
    const {id : totoId} = req.params;
    res.json(totoId)
})



app.listen(8000, () =>{
    console.log("App Running");
});