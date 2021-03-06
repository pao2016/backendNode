"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var homeController = __importStar(require("../server/controllers/home"));
var body_parser_1 = __importDefault(require("body-parser"));
//import * as cors from 'cors';
var cors = require('cors');
var router = express_1.Router();
router.use(cors());
router.use(body_parser_1.default.json());
router.use(body_parser_1.default.urlencoded({ extended: true }));
router.get('/users', homeController.users);
router.get('/users/:id', homeController.user);
router.post('/user/create', homeController.create);
router.post('/estante/create', homeController.createEstante);
router.get('/estantes', homeController.listEstantes);
router.get('/estante/:id', homeController.estanteById);
router.get('/productos', homeController.listProductos);
router.post('/estanteProducto/create', homeController.createEstanteProducto);
router.get('/estanteProducto', homeController.listEstanteProducto);
exports.default = router;
