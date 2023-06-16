import qr from 'qrcode';

// Prepare data
const data = {
  id: 1,
  name: "Sanjay",
  email: "testuser@gmail.com"
};

const strData = JSON.stringify(data);
console.log(strData);
// To display qr code into terminal
qr.toString(strData, { type: 'terminal' },
  (err, code) => {
    if (err) return console.log("error occurred");
    console.log(code);
  });

// To display qrcode in string format
qr.toDataURL(strData, (err, code) => {
  if (err) return console.log("error occurred");

//   console.log(code);
});

