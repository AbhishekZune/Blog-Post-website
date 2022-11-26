const { response } = require("express");
require("./db/conn");
const User = require("./models/usermessage")
const hbs = require("hbs")
const express = require ("express");
const path = require("path");
const app = express()
const port = process.env.PORT || 3000;



// static website setting the path
const staticpath = path.join(__dirname , "../public");
const templatespath = path.join(__dirname , "../templates/views");
const partialspath = path.join(__dirname , "../templates/partials");
//console.log(path.join(__dirname , "../public"));

app.use(express.urlencoded({extended:false}))  // this is done to get data i.e. it should not be lost
// middleware
app.use('/css', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(staticpath))

//setting view engine
app.set("view engine" , "hbs");

app.set("views" , templatespath)
hbs.registerPartials(partialspath)

//routing
// app.get(path , callback)
// app.get("/" , (req,res) => {
//     res.send("Hi !!! I am abhishek and I am awesome");
// }) 
app.get("/" , (req,res) => {
    res.render("index");
}) 



app.post("/contact",async(req,res)=>{
    try {
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index")

        
    } catch (error) {
        res.status(500).send(error)
    }
})

// //server create 
app.listen(port , () => {
    console.log(`server is running at port no. ${port}`);
})