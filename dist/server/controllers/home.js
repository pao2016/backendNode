"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.user = exports.users = void 0;
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
    var query = "INSERT INTO usuarios (username, name , email) VALUES ( '" + username + "', '" + name + "', '" + email + "') ";
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
