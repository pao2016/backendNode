"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.estanteById = exports.listEstantes = exports.createEstante = exports.create = exports.user = exports.users = void 0;
var mysql_1 = __importDefault(require("../../mysql/mysql"));
var users = function (req, res) {
    var query = " \n    SELECT *\n    FROM  usuarios";
    mysql_1.default.ejecutarQuery(query, function (err, user) {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                user: user
            });
        }
    });
};
exports.users = users;
var user = function (req, res) {
    var id = req.params.id;
    var escapeID = mysql_1.default.instance.cnn.escape(id);
    var query = " SELECT *\n    FROM  usuarios wHERE \n    id = " + escapeID;
    mysql_1.default.ejecutarQuery(query, function (err, user) {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                user: user[0]
            });
        }
    });
};
exports.user = user;
var create = function (req, res) {
    var username = req.body.username;
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var query = "INSERT INTO usuarios (username, name , email, password) VALUES ( '" + username + "', '" + name + "', '" + email + "', '" + password + "') ";
    mysql_1.default.ejecutarMutacion(query, function (err, result) {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err,
            });
        }
        else {
            res.json({
                ok: true,
                result: result
            });
        }
    });
};
exports.create = create;
var createEstante = function (req, res) {
    var codigo = req.body.codigo;
    var descripcion = req.body.descripcion;
    var fila = req.body.fila;
    var columna = req.body.columna;
    var query = "INSERT INTO estantes(codigo, descripcion, fila, columna) VALUES ('" + codigo + "', '" + descripcion + "', '" + fila + "', '" + columna + "') ";
    mysql_1.default.ejecutarMutacion(query, function (err, result) {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err,
            });
        }
        else {
            res.json({
                ok: true,
                result: result
            });
        }
    });
};
exports.createEstante = createEstante;
var listEstantes = function (req, res) {
    var query = " \n        SELECT *\n        FROM  estantes";
    mysql_1.default.ejecutarQuery(query, function (err, estanerias) {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                estanerias: estanerias
            });
        }
    });
};
exports.listEstantes = listEstantes;
var estanteById = function (req, res) {
    var id = req.params.id;
    var escapeID = mysql_1.default.instance.cnn.escape(id);
    var query = " SELECT *\n        FROM  estantes wHERE \n        id = " + escapeID;
    mysql_1.default.ejecutarQuery(query, function (err, estante) {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                estante: estante[0]
            });
        }
    });
};
exports.estanteById = estanteById;
