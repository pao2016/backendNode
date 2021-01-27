import { Router, Request, Response } from 'express'
import * as homeController from "../server/controllers/home";
import bodyParser from "body-parser";
//import * as cors from 'cors';
var cors = require('cors')
const router = Router();

router.use(cors());

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }))
router.get('/users', homeController.users);
router.get('/users/:id', homeController.user);
router.post('/user/create', homeController.create);
router.post('/estante/create', homeController.createEstante);
router.get('/estantes', homeController.listEstantes);
router.get('/estante/:id', homeController.estanteById);
router.get('/productos', homeController.listProductos); 
router.post('/estanteProducto/create', homeController.createEstanteProducto);
router.get('/estanteProducto', homeController.listEstanteProducto); 



export default router;