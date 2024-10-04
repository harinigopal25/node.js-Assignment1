const fs = require('fs');

// Create a file
fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File has been created.');
});

// Read the file
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Append to the file
fs.appendFile('example.txt', '\nThis is appended text!', (err) => {
    if (err) throw err;
    console.log('Text has been appended to file.');
});

// Delete the file
fs.unlink('example.txt', (err) => {
    if (err) throw err;
    console.log('File has been deleted.');
});
