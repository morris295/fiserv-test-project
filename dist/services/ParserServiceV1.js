"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParsingResponse_1 = require("../types/ParsingResponse");
class ParserServiceV1 {
    parse(input) {
        const parts = input.split(/([a-zA-Z]+0+)/);
        for (let i = 0; i < parts.length; i++) {
            if (parts[i].length <= 1) {
                parts.splice(i, 1);
            }
        }
        const result = new ParsingResponse_1.ParsingResponse(parts[0], parts[1], parts[2], 200);
        return result;
    }
}
exports.ParserServiceV1 = ParserServiceV1;
//# sourceMappingURL=ParserServiceV1.js.map