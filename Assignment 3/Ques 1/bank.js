function Account(amount) {
    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;
}
function deposit(amount) {
    this.balance += amount;
}
function withdraw(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    }
    if (amount > this.balance) {
        alert("Insufficient funds");
    }
}
function toString() {
    return "Balance: " + this.balance;
}
var account = new Account(50);

account.withdraw(35);
console.log(account.toString());
account.withdraw(8);
console.log(account.toString());
account.withdraw(8);
console.log(account.toString());
