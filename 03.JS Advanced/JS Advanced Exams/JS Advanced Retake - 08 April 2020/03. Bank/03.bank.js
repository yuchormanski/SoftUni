class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        const found = this.allCustomers.find(obj => {
            if (obj.firstName === customer.firstName && obj.lastName === customer.lastName) {
                return true;
            } else return false;
        });
        if (found) {
            throw new Error(`${found.firstName} ${found.lastName} is already our customer!`);
        }
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        const found = this.allCustomers.find(obj => obj.personalId === personalId);
        if (!found) {
            throw new Error('We have no customer with this ID!');
        }
        if (!found.totalMoney) {
            found.totalMoney = 0;
            found.transactions = [];
        }
        found.totalMoney += amount;
        found.transactions.push({ deposit: amount });
        return `${found.totalMoney}$`
    }

    withdrawMoney(personalId, amount) {
        const found = this.allCustomers.find(obj => obj.personalId === personalId);
        if (!found) {
            throw new Error('We have no customer with this ID!');
        }
        if (found.totalMoney < amount) {
            throw new Error(`${found.firstName} ${found.lastName} does not have enough money to withdraw that amount!`);
        }
        found.totalMoney -= amount;
        found.transactions.push({ withdraw: amount });
        return `${found.totalMoney}$`
    }


    customerInfo(personalId) {
        const found = this.allCustomers.find(obj => obj.personalId === personalId);
        if (!found) {
            throw new Error('We have no customer with this ID!');
        }
        const report = [`Bank name: ${this.bankName}`, `Customer name: ${found.firstName} ${found.lastName}`, `Customer ID: ${found.personalId}`, `Total Money: ${found.totalMoney}$`, `Transactions:`];
        let count = found.transactions.length;
        found.transactions
            .reverse()
            .forEach(line => {
                let action = Object.keys(line).shift();
                if (action === 'withdraw') {
                    report.push(`${count--}. ${found.firstName} ${found.lastName} withdrew ${line[action]}$!`);
                } else {
                    report.push(`${count--}. ${found.firstName} ${found.lastName} made deposit of ${line[action]}$!`);
                }
            });
        return report.join('\n');
    }
}

let bank = new Bank('SoftUni Bank');
console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);
console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));






/* 
'Bank name: SoftUni Bank
'Bank name: SoftUni Bank

Customer name: Svetlin Nakov
Customer name: Svetlin Nakov

Customer ID: 1111111
Customer ID: 1111111

Total Money: 375$
Total Money: 375$

Transactions:
Transactions:

3. Svetlin Nakov withdrew 125$!
3. Svetlin Nakov withdraw 125$!

2. Svetlin Nakov made deposit of 250$!
2. Svetlin Nakov made deposit of 250$!

1. Svetlin Nakov made deposit of 250$!'
1. Svetlin Nakov made deposit of 250$!'


 */





