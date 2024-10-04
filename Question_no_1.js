const fs = require('fs');

console.log("Start reading file...");

const data = fs.readFileSync('example.txt', 'utf8'); // Blocking call
console.log(data); // This line will not execute until the file is completely read

console.log("Finished reading file.");



const fs = require('fs');

console.log("Start reading file...");

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err; // Error handling
    console.log(data);   // This will be called once file is read
});

console.log("Finished reading file."); // This line executes immediately
