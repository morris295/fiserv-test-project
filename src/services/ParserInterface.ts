import { ParsingResponse } from "../types/ParsingResponse";

export interface ParserInterface {
    parse(input: string): ParsingResponse;
}