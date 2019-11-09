"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParsingResponse_1 = require("../types/ParsingResponse");
class ParserServiceV2 {
    parse(input) {
        const parts = input.split("000");
        for (let i = 0; i < parts.length; i++) {
            let found = null;
            if (found = parts[i].match(/\d[a-zA-Z]+|[a-zA-Z]+\d/) !== null) {
                parts[i] = parts[i].replace(/\d/g, "");
            }
        }
        const firstName = parts[0];
        const lastName = parts[1];
        const clientId = parts[2].substring(0, 3) + "-" + parts[2].substring(3, parts[2].length);
        const result = new ParsingResponse_1.ParsingResult(firstName, lastName, clientId, 200);
        return result;
    }
}
exports.ParserServiceV2 = ParserServiceV2;
//# sourceMappingURL=ParserServiceV2.js.map