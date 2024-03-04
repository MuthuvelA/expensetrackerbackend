const express = require('express')
const app = express()

const mongoose = require('mongoose')
const Author = require('./models/author')

const static = express.static("static")
app.use("/",static)

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true})) // form data

//mongodb connectivity
mongoose.connect('mongodb://127.0.0.1:27017/blogs').
 then(() => console.log("DB Connected"))
  .catch(() => console.log("Db Connection failed"));



console.log(Author.find({}).then(
    (data) => console.log(data)
))


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
    //exception handling (running on offline) 503 - Service Unavailable
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos = await response.json();
    res.json(todos);
    }
    catch(error){
        res.status(503).json({
            error:'API Call Failed',
        });
    }


} );


///hi, /todos, /1 resources in Rest Terms
// app.get("/todos/2", async (req,res) => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/2")
//     const todos = await response.json();
//     res.json(todos);
// })
app.get("/todos/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
        const todos = await response.json();
        const filteredData = todos.filter(todo =>
            todo.id == id
        );

        if (filteredData.length === 0) {
            res.status(404).json({ error: "Data not found" });
        } else {
            console.log(filteredData);
            res.json(filteredData);
        }
    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
});


// app.get("/todos/:id", async (req,res) => {
//     const {id : totoId} = req.params;
//     res.status(400).json({totoId})
// })

//wildcard endpoint
app.get("*",(req,res) => {
    res.json({});
})


app.listen(8000, () =>{
    console.log("App Running");
});
