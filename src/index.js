// Imports
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const nodeMailer = require('nodemailer');
const path = require('path');

// Local variables
const app = express();
const port = process.env.PORT || 3000;
const user = process.env.USERMAIL;
const pass = process.env.PASSWORD;

app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/index.html'));
});

app.post('/send', (req, res) => {
    let nameForm = req.body.nameForm;
    let emailForm = req.body.emailForm;
    let phoneForm = req.body.phoneForm;

    const transporter = nodeMailer.createTransport({
        host: process.env.HOSTMAIL,
        port: process.env.PORTMAIL,
        auth: { user, pass }
    });

    transporter.sendMail({
        from: user,
        to: emailForm,
        replyTo: user,
        subject: 'Formulário de cadastro',
        text: `Olá, ${nameForm}, muito obrigado por se cadastrar em nossa página!`,
    }).then(info => {
        res.send('Formulário enviado com sucesso!');
    }).catch(e => {
        res.send('Um erro ocorreu!');
    })
})

app.listen(port, () => {
    try{
        console.log(`Server running: http://localhost:${port}/`)
    } catch(e) {
        console.log(`An error occuried. Log: ${e}.`);
    };
});