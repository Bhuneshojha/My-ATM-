import inquirer from "inquirer";

let user = await inquirer.prompt([
    {
        type: "string",
        name: "Cardholdername",
        message: "Welcome dear Mahendar "
    },

    {
        type: "number",
        name: "PinCode",
        message: "Enter your 5 digit pin code"
    },

    {
        type: "list",
        name: "Account type",
        message: "Select your account type",
        choices: ["Current", "Saving"],
    },

    {
        type: "list",
        name: "TransitionType",
        message: "Select your transition type",
        choices: ["Cash","Withdraw"]
    },

    {
        type: "list",
        name: "amount",
        message: "Select your amount",
        choices: [1000, 2000, 5000, 10000],
        when (user) {
            return user.TransitionType == "Cash"
        }
    },

    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when (user) {
            return user.TransitionType === "Withdraw"
        }
    }
])

// -- Final Receipt
 
if (user.PinCode) {
    const balance = Math.floor(Math.random()*10000 + 1)
    console.log(balance)
    const enterAmount = user.amount;

if (enterAmount <= balance) {
    const remaining = balance - enterAmount
    
    console.log(`You have Withdraw  ${enterAmount} and you have remaining balance ${remaining}`)
}
}