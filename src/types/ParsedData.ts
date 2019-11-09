export class ParsedData {
    firstName: string;
    lastName: string;
    clientId: string;

    constructor(firstname: string, lastname: string, clientid: string) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.clientId = clientid;
    }
}