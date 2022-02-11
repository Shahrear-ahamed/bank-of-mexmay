function inputAmount(inputId){
    const inputDepositText = document.getElementById(inputId);
    const inputDeposit = parseFloat(inputDepositText.value);

    inputDepositText.value = "";
    return inputDeposit;
}

function balanceAmount(balanceAmount, depositBalance){
    const depositText = document.getElementById(balanceAmount);
    const depositAmount = parseFloat(depositText.innerText);
    depositText.innerText = depositAmount + depositBalance;
}

document.getElementById("deposit_btn").addEventListener("click", function(){
    const inputDeposit = inputAmount("deposit_amount");
    balanceAmount("total_deposit", inputDeposit);

    const totalDepositText = document.getElementById("total_balance");
    const totalDeposit = parseFloat(totalDepositText.innerText);

    totalDepositText.innerText = totalDeposit + inputDeposit;
})

document.getElementById("withdrow_btn").addEventListener("click", function(){
    const inputWithdrow = inputAmount("withdrow_amount");
    balanceAmount("total_withdrow", inputWithdrow);

    const totalWithdrowText = document.getElementById("total_balance");
    const totalWithdrow = parseFloat(totalWithdrowText.innerText);

    totalWithdrowText.innerText = totalWithdrow - inputWithdrow;
})