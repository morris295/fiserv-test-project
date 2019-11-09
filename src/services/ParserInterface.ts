import { ParsingResult } from "../types/ParsingResponse";

export interface ParserInterface {
    parse(input: string): ParsingResult;
}