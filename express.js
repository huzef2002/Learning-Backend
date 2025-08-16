const express = require('express');
const path = require('path')

app = express();


// app.get("/huzef", function(req, res){
//     const id = req.query.id;
//     res.send("Hello Huzef from Express!" + id);
// })

// app.get("/huzefa/:id", function(req, res){
//     const id = req.params.id;
//     res.send("Hello Huzef from Express!" + id);
// })

app.get("/", function (req, res) {
    res.send("Hello World from Express!");
})

app.get("/about", (req, res)=>{
    // res.sendFile(path.join(__dirname, 'expressHtm.html'))
    // res.status(500)
    res.json({
        name: "Huzef",
        age: 20,
        city: "Jamner"
    })
}) 

app.listen(9000, function (req, res) {
    console.log('Server is running on port 9000');
})