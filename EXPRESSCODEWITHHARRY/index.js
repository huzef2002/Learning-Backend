const express = require('express');
const path = require('path')
var engin = require('express-handlebars');

const port = 9000

app = express();

app.engine('handlebars',engin());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "static")))
app.use('/', require(path.join(__dirname, "routes/blog.js")) )

app.listen(port, function (req, res) {
    console.log(`Server is running on http://localhost:${port} `);
})