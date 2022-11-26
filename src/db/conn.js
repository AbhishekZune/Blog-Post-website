const mongoose = require("mongoose")

// creating a database
// mongoose.connect ("mongodb://localhost:27017/blogpostsdb", { 
//     useNewUrlParser : false , 
//     useUnifiedTopology : false
// }).then(() => {
//     console.log("connetion is established");




// }).catch((error) => {
//     console.log(error);
// })

mongoose.connect ("mongodb+srv://admin:admin@cluster0.qwezl9v.mongodb.net/?retryWrites=true&w=majority", { 
    useNewUrlParser : false , 
    useUnifiedTopology : false
}).then(() => {
    console.log("connetion is established");
}).catch((error) => {
    console.log(error);
})