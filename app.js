// old version of code
import qr from 'qrcode';//to generate qr code 
import fs from 'fs'; //to covet the image file

const qrData = {  
  name:"name of the person",
  id:"13001500",
  age:33
} // QR code data or URL
console.log(...qrData);
// Generate the QR code as a data URL
// 'H': High (Approximately 30% or less errors can be corrected)
qr.toDataURL(JSON.stringify(qrData), { errorCorrectionLevel: 'H' }, (err, qrDataURL) => {
  if (err) {
    console.error('Error occurred while generating QR code:', err);
    return;
  }

  // Extract the image data from the data URL
  const imageData = qrDataURL.replace(/^data:image\/png;base64,/, '');

  // Save the image data as a file
  fs.writeFile('qrcode.png', imageData, 'base64', (err) => {
    if (err) {
      console.error('Error occurred while saving QR code as an image:', err);
    } else {
      console.log('QR code image saved successfully!');
    }
  });
});

// fs.unlink()

// import { unlink } from 'node:fs';
// // Assuming that 'path/file.txt' is a regular file.
// unlink('path/file.txt', (err) => {
//   if (err) throw err;
//   console.log('path/file.txt was deleted');
// });
