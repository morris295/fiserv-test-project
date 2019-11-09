import { ParsedData } from "./ParsedData";

export class ParsingResult {
    statusCode: number;
    data: ParsedData;


    constructor(firstname: string, lastname: string, clientid: string, status: number) {
        this.statusCode = status
        this.data = new ParsedData(firstname, lastname, clientid);
    }
}