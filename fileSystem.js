var fs = require('fs');

fs.readFile('calc.js', 'utf8', function(error, data) {
    console.log (data)
})


// for making new file
fs.writeFile('fileSystem1.js', 'This is a new file created using fs module', function(err) {
    console.log ('File created successfully');
})


// appendFile Means to add content after an existing code
fs.appendFile('calc.js', 'console.log("Its working")', function(err){
    console.log('File updated successfully');
})


// for deleting a file
fs.unlink('fileSystem1.js', function(err) {
    console.log('File deleted successfully');
})