const express = require("express")
var methodOverride = require('method-override')
const app = express()
const port = 8080

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'))

const { v4: uuidv4 } = require('uuid');

const path = require('path');
// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/",(req,res)=>{
    console.log("server working well")
})

let posts = [
    {
        id: uuidv4(),
        username: "Ketan",
        content: "I love coding"
    },
    {
        id: uuidv4(),
        username: "vedant",
        content: "I love to travel"
    },
    {
        id: uuidv4(),
        username: "vaibhav",
        content: "I love Gameplay"
    }
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
})

app.get("/new",(req,res)=>{
    res.render("post.ejs")
})

app.post("/posts",(req,res)=>{
    // res.send("post request working")
    // console.log(req.body)
    let {username,content} = req.body;
    let id = uuidv4()
    posts.push({id,username,content})
    res.redirect("/posts")
})

app.get("/posts/:id",(req,res)=>{
    let { id } = req.params
    // console.log(id)
    let post = posts.find((p) =>id === p.id)
    // console.log(post)
    res.render("show.ejs",{post})
    // res.send("request working")
})

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params
    let new_content = req.body.content
    let post = posts.find((p) =>id === p.id)
    post.content = new_content
    // console.log(id)
    // consolelog(new_content)
    console.log(post)
    res.redirect("/posts")
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params
    let post = posts.find((p) =>id === p.id)
    res.render("edit.ejs",{post})
})

app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params
    posts = posts.filter((p) =>id !== p.id)
    // posts.pop(post)
    res.redirect("/posts")
    // res.send("Delete request is working")
})

app.listen(port, ()=>{
    console.log(`Listening to the port ${port}`)
})