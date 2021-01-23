"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, username, email) {
        this.name = name;
        this.username = username;
        this.email = email;
    }
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
exports.default = User;
