interface User  {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }
}

class AdminAccount {
    name: string;
    id: number;
    password: string;
    
    constructor(name: string, id: number, password: string){
        this.name = name;
        this.id = id;
        this.password = password;
    }
}

const user: User = new UserAccount("Frank", 2);
const admin :User = new AdminAccount("Bob", 23, "secret");

console.log(user);
console.log(admin);