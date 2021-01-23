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



export default router;