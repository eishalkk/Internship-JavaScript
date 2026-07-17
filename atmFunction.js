function atm(choice, balance, amount){
    console.log("------Menu------");
    console.log("1. Check Balance.");
    console.log("2. Deposit.");
    console.log("3. Withdraw.");
    console.log("4. Exit.");
    console.log("Choice Entered: ", choice);

    switch (choice) {
        case 1: 
            console.log("Your Balance: $", balance);
            break;
        case 2: 
            balance=balance+amount;
            console.log("Amount Deposited: $", amount);
            console.log("Updated Balance: $", balance);
            break;
        case 3: 
            if (balance>=amount){
            balance=balance-amount;
            console.log("Amount withdrawn: $", amount);
            console.log("Updated Balance: $", balance);
            }
            else {
                console.log("Insufficient Balance!");
            }
            break;
        case 4: 
                console.log("-----Exit-----");
                break;
        default:
            console.log("Invalid Choice.");
    }
}
atm(1, 10000, 1900);
atm(2, 10000, 1900);
atm(3, 10000, 1900);
atm(3, 10000, 10900);
atm(4, 10000, 1900);
