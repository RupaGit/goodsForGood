// // handleSubmit(e){
// //     e.preventDefault();
// //     const name = document.getElementById('name').value;
// //     const email = document.getElementById('email').value;
// //     const message = document.getElementById('message').value;
// //     axios({
// //         method: "POST",
// //         url:"http://localhost:3002/send",
// //         data: {
// //             name: name,
// //             email: email,
// //             messsage: message
// //         }
// //     }).then((response)=>{
// //         if (response.data.msg === 'success'){
// //             alert("Message Sent.");
// //             this.resetForm()
// //         }else if(response.data.msg === 'fail'){
// //             alert("Message failed to send.")
// //         }
// //     })
// // }
// const systemEmail='goodforgooods@gmail.com';
// const systemPassword='RupaGuyJavis123';
// var nodemailer = require('nodemailer');

// var transport = {
//   host: 'smtp.gmail.com',
//   auth: {
//     user: systemEmail,
//     pass: systemPassword
//   }
// }

// var transporter = nodemailer.createTransport(transport)

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });
// //**watting for passing the log in user eamil */
// var mail = {
//   from: name,
//   to: emailUser,  //Change to email address that you want to receive messages on
//   subject: 'New Message from Contact Form',
//   text: content
// }

// transporter.sendMail(mail, (err, data) => {
//   if (err) {
//     res.json({
//       msg: 'fail'
//     })
//   } else {
//     res.json({
//       msg: 'success'
//     })
//   }
// })

// module.exports = nodemailer;
