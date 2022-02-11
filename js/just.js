function inputAmount(inputId){
    const inputDepositText = document.getElementById(inputId);
    const inputDeposit = parseFloat(inputDepositText.value);
    inputDepositText.value = "";
    return inputDeposit;
}

function updateBalance(balanceAmount, depositBalance){
    const depositText = document.getElementById(balanceAmount);
    const depositAmount = parseFloat(depositText.innerText);
    depositText.innerText = depositAmount + depositBalance;
}

function updateTotalBalance(inputTextField, isAdd){
    const totalDepositText = document.getElementById("total_balance");
    const totalDeposit = parseFloat(totalDepositText.innerText);
    if(isAdd == true){
        totalDepositText.innerText = totalDeposit + inputTextField;
    }else{
        totalDepositText.innerText = totalDeposit - inputTextField;
    }
}

//main button function are here
document.getElementById("deposit_btn").addEventListener("click", function(){
    const inputDeposit = inputAmount("deposit_amount");
    if(inputDeposit > 0){
    updateBalance("total_deposit", inputDeposit);
    updateTotalBalance(inputDeposit, true);
    }
})

document.getElementById("withdrow_btn").addEventListener("click", function(){
    const inputWithdrow = inputAmount("withdrow_amount");
    if(inputWithdrow > 0){
    updateBalance("total_withdrow", inputWithdrow);
    updateTotalBalance(inputWithdrow, false);
    }
})