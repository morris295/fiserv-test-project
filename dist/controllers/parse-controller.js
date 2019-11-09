"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParserServiceV1_1 = require("../services/ParserServiceV1");
const ParserServiceV2_1 = require("../services/ParserServiceV2");
exports.parseV1 = (req, res) => {
    const parserServiceV1 = new ParserServiceV1_1.ParserServiceV1();
    const result = parserServiceV1.parse(req.body.data);
    res.json(result);
};
exports.parseV2 = (req, res) => {
    const parserServiceV2 = new ParserServiceV2_1.ParserServiceV2();
    const result = parserServiceV2.parse(req.body.data);
    res.json(result);
};
//# sourceMappingURL=parse-controller.js.map