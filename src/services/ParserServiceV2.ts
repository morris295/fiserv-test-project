import { ParsingResult } from "../types/ParsingResponse";
import { ParserInterface } from "./ParserInterface";

export class ParserServiceV2 implements ParserInterface {
    parse(input: string): ParsingResult {
        
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
        const result = new ParsingResult(firstName, lastName, clientId, 200);

        return result;
    }
}