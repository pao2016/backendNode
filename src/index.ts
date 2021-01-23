import { Router } from 'express';
import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';

const server = Server.init(3000);
const bodyParse = require('body-parser');

server.app.use(router);
server.app.use(bodyParse.json());
server.app.use(bodyParse.urlencoded({extended:true}));
MySQL.instance; 

server.start(()=>{
console.log('servidor corriendo en el puerto 300');
});