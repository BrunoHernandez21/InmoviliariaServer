
var express = require('express');
const { body } = require('express-validator');
var app = express();
var mdAutenticacion = require('../../middlewares/autenticacion');   //guards
var AuthController = require ('./auth.controller');                 //Procesos del modulo


app.post('/login',[mdAutenticacion.pushNotificationHeader,
    body('email',"Email is necessary").exists(),
    body('password','Password is necessary').exists(),
    body('email','It\'s not a form of email').isEmail()
],AuthController.login);

app.post('/sign-up',[
    body('email',"Email is necessary").exists(),
    body('password','Password is necessary').exists(),
    body('email','It\'s not a form of email').isEmail()
],AuthController.crearUsuario);

app.post('/renuevatoken',       [mdAutenticacion.verificaToken],    AuthController.verifyUser);
app.put('/update-password/:id', [mdAutenticacion.verificaToken],    AuthController.cambiarPassword);
//app.put('/usuario/:id',         [mdAutenticacion.verificaToken],    AuthController.updateInfo);
app.post('/reset-password',                                         AuthController.resetPassword);


app.get('/user',                [mdAutenticacion.verificaToken],    AuthController.getUserFromToken); //?
app.get('/verify-user',         [mdAutenticacion.verificaToken],    AuthController.verifyUser);//?
app.get('/renuevatoken',        [mdAutenticacion.verificaToken],    AuthController.verifyUser);
//app.post('/Contrato',           [mdAutenticacion.verificaToken],    AuthController.signByContrato);//???



module.exports = app;
