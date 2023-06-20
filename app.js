import qr from 'qrcode';
import fs from 'fs';

const qrData={
  id: 1,
  name: "Sanjay",
  email: "testuser@gmail.com"
}

// const qrData = 'http://example.com'; // QR code data or URL

// Generate the QR code as a data URL
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

