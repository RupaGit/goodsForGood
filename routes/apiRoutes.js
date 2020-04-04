
const nodemailer = require("../config/nodemailer");

module.exports = function (app) {
app.post("/api/emailUser", (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${content} `  
  })
}
