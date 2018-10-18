
export class User {
    name: string;
    surname: string;
    phone: number;
    mail: string;
    gdprOk: boolean;
    address: Address;
}

export class Address {
    city: string;
    postalCode: number;
}