// create-file.js
const fs = require('fs');

fs.writeFileSync('welcome.txt', 'Hello Node');
console.log('File created: welcome.txt');
