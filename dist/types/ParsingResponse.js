"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParsedData_1 = require("./ParsedData");
class ParsingResult {
    constructor(firstname, lastname, clientid, status) {
        this.statusCode = status;
        this.data = new ParsedData_1.ParsedData(firstname, lastname, clientid);
    }
}
exports.ParsingResult = ParsingResult;
//# sourceMappingURL=ParsingResponse.js.map