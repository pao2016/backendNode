"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var MySQL = /** @class */ (function () {
    function MySQL() {
        this.conectado = false;
        console.log('clase inicializada');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: '123456',
            database: 'test'
        });
        this.conectarDB();
    }
    Object.defineProperty(MySQL, "instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: false,
        configurable: true
    });
    MySQL.ejecutarQuery = function (query, callback) {
        this.instance.cnn.query(query, function (err, results, fields) {
            if (err) {
                console.log('Error en query');
                console.log(err);
                return callback(err);
            }
            if (results.length === 0) {
                console.log('El registro solicitado no existe');
            }
            else {
                callback(null, results);
            }
        });
    };
    MySQL.ejecutarMutacion = function (query, callback) {
        this.instance.cnn.query(query, function (err, results, fields) {
            console.log("aqui entra", query);
            if (err) {
                console.log('Error en query');
                console.log(err);
                return callback(err);
            }
            callback(null, results);
        });
    };
    MySQL.prototype.conectarDB = function () {
        var _this = this;
        this.cnn.connect(function (err) {
            if (err) {
                console.log(err.message);
                return;
            }
            _this.conectado = true;
            console.log('Base de datos Online');
        });
    };
    return MySQL;
}());
exports.default = MySQL;
