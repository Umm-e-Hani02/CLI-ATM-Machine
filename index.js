#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.hex("#ff6666")("\n\tWelcome to the ATM Machine\n"));
let myBalance = 50000; //Dollar
let myPin = 135901;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.hex("#00cc00")("Enter your pin:"),
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.hex("#e600ac")("Correct pin code!!!"));
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.hex("#00ffff")("Select one option"),
            type: "list",
            choices: [
                chalk.hex("#f9f906")("Withdraw"),
                chalk.hex("#f9f906")("Check Balance")
            ]
        }
    ]);
    if (operationAnswer.operation === chalk.hex("#f9f906")("Withdraw")) {
        let withDrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                message: chalk.hex("#00ffff")("Select withdraw method"),
                type: "list",
                choices: [
                    chalk.hex("f9f906")("Fastcash"),
                    chalk.hex("f9f906")("Enter Amount")
                ]
            }
        ]);
        if (withDrawAns.withdrawMethod === chalk.hex("f9f906")("Fastcash")) {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    message: chalk.hex("#00ffff")("Select amount"),
                    type: "list",
                    choices: ["5000", "1000", "15000", "20000", "30000", "50000"]
                }
            ]);
            if (fastCashAns.fastcash > myBalance) {
                console.log(chalk.redBright("Insufficient balance"));
            }
            else {
                myBalance -= fastCashAns.fastcash;
                console.log(chalk.hex("#ff6699")(`\n${fastCashAns.fastcash} Withdraw successfully`));
                console.log(chalk.hex("#e60073")("Your remaining balance is: " + myBalance));
            }
        }
        else if (withDrawAns.withdrawMethod === chalk.hex("f9f906")("Enter Amount")) {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: chalk.hex("00ffff")("Enter the amount to withdraw"),
                    type: "number"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log(chalk.redBright("Insufficient balance!!!"));
            }
            else {
                myBalance -= amountAns.amount;
                console.log(chalk.hex("#ff6699")("Your remaining balance is: " + myBalance));
            }
        }
    }
    else if (operationAnswer.operation === chalk.hex("#f9f906")("Check Balance")) {
        console.log(chalk.hex("ff6699")("Your balance is: " + myBalance));
    }
}
else {
    console.log(chalk.redBright("Incorrect pin code!! Try again"));
}
console.log(chalk.hex("#ff6666")("\n\t Thank you for using my ATM!\n"));
