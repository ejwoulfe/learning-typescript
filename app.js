var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var AdminAccount = /** @class */ (function () {
    function AdminAccount(name, id, password) {
        this.name = name;
        this.id = id;
        this.password = password;
    }
    return AdminAccount;
}());
var user = new UserAccount("Frank", 2);
var admin = new AdminAccount("Bob", 23, "secret");
console.log(user);
console.log(admin);
