"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var Server = /** @class */ (function () {
    function Server(puerto) {
        this.port = puerto;
        this.app = express();
    }
    Server.init = function (port) {
        return new Server(port);
    };
    Server.prototype.start = function (callback) {
        this.app.listen(this.port, callback());
        this.publicFolder();
    };
    Server.prototype.publicFolder = function () {
        var publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    };
    return Server;
}());
exports.default = Server;
