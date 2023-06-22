// // Node.js program to demonstrate the
// // fs.unlinkSync() method

// // Import the filesystem module
// import fs from 'fs';

// // Get the files in current directory
// // before deletion
// getFilesInDirectory();

// // Delete readme.md
// fs.unlinkSync("readme.md");
// console.log("\nFile readme.md is deleted");

// // Get the files in current directory
// // after deletion
// getFilesInDirectory();

// // Function to get current filenames
// // in directory with specific extension
// function getFilesInDirectory() {
// console.log("\nFiles present in directory:");
// let files = fs.readdirSync(__dirname);
// files.forEach(file => {
// 	console.log(file);
// });
// }

import fs from 'fs';
// delete a file
fs.unlink('./images/qrcode.png', err => {
  if (err) {
    throw err;
  }
  console.log('File is deleted.');
});
