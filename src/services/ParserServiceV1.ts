import { ParsingResponse } from "../types/ParsingResponse";
import { ParserInterface } from "./ParserInterface";

export class ParserServiceV1 implements ParserInterface {
    parse(input: string): ParsingResponse {
        const parts = input.split(/([a-zA-Z]+0+)/);

        for (let i = 0; i < parts.length; i++) {
            if (parts[i].length <= 1) {
                parts.splice(i, 1);
            }
        }

        const result = new ParsingResponse(parts[0], parts[1], parts[2], 200);

        return result;
    }
}