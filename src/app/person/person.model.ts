export class Person {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    getEmail(): string {
        return this.email;
    }

    getName(): string {
        return this.name;
    }
}