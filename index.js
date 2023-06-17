import QRCode from 'qrcode'

// const data ={
//     name : "nisha",
//     id: "0201303793"
// }

// const qrCode = QRCode.toDataURL(data)
// .then(url=>{
//     console.log(url);
// })
// .catch(error=>{
//     console.log(error);
// })
// console.log(qrCode);

// const generateQR = async text => {
//   try {
//     console.log(await QRCode.toDataURL(text))
//   } catch (err) {
//     console.error(err)
//   }
// }


// With promises
try {
    
    QRCode.toDataURL('I am a pony!')
    console.log(url)
} catch (error) {
    console.error(error)
}
  
const generateQR = async text => {
  try {
    console.log(await QRCode.toDataURL(text))
  } catch (err) {
    console.error(err)
  }
}