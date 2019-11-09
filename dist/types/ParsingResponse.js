"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParsedData_1 = require("./ParsedData");
class ParsingResponse {
    constructor(firstname, lastname, clientid, status) {
        this.statusCode = status;
        this.data = new ParsedData_1.ParsedData(firstname, lastname, clientid);
    }
}
exports.ParsingResponse = ParsingResponse;
//# sourceMappingURL=ParsingResponse.js.map