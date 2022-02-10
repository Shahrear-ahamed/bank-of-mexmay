
// user home page are here 

// user total amount are here
const totalDeposit = document.getElementById("total_deposit");
const totalWithdrow = document.getElementById("total_withdrow");
const totalBalance = document.getElementById("total_balance");

// money deposit and withdrow 
const depositBtn = document.getElementById("deposit_btn");
const deposit = document.getElementById("deposit_amount");
const withdrowBtn = document.getElementById("withdrow_btn");
const withdrow = document.getElementById("withdrow_amount");

depositBtn.addEventListener("click", function(){
    const depositAmounts = parseFloat(deposit.value);
    const previousDeposit = parseFloat(totalDeposit.innerText);
    const totalBalanceNumber = parseFloat(totalBalance.innerText);

    const lastAmountDeposit = previousDeposit + depositAmounts;

    // add total balance 
    const finalBalance = depositAmounts + totalBalanceNumber;
    
    totalDeposit.innerText = lastAmountDeposit;
    deposit.value = "";

    totalBalance.innerText = finalBalance;
})

// withdrow section functior
withdrowBtn.addEventListener("click", function(){
    const withdrowAmounts = parseFloat(withdrow.value);
    const previousWithdrow = parseFloat(totalWithdrow.innerText);
    const totalBalanceNumber = parseFloat(totalBalance.innerText);

    const lastAmountWithdrow = withdrowAmounts + previousWithdrow;

    //total cost taka in total balance
    const totalLastbalance = totalBalanceNumber - withdrowAmounts;

    totalWithdrow.innerText = lastAmountWithdrow;
    withdrow.value = "";

    totalBalance.innerText = totalLastbalance;
})


// error handeling 
// if(typeof depositAmounts == "string"){
//     alert("Please Input number only");
//     return
// }
// if( depositAmounts < 0){
//     alert("Money can not deposit negetive number");
//     return
// }else if( depositAmounts == 0){
//     alert("You can not deposit 0 ");
//     return
// }