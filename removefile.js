import fs from 'fs';
// delete a file
fs.unlink('qrcode.png', err => {
  if (err) {
    throw err;
  }
  console.log('File is deleted.');
});
