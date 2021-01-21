"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/heroes', function (req, resp) {
    resp.json({
        ok: true,
        mensaje: 'bien'
    });
});
exports.default = router;
