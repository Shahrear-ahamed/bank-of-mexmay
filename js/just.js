document.getElementById("deposit_btn").addEventListener("click", function(){
    const inputDepositText = document.getElementById("deposit_amount");
    const inputDeposit = parseFloat(inputDepositText.value);

    const depositText = document.getElementById("total_deposit");
    const depositAmount = parseFloat(depositText.innerText);
    depositText.innerText = depositAmount + inputDeposit;
    inputDepositText.value = "";

    const totalDepositText = document.getElementById("total_balance");
    const totalDeposit = parseFloat(totalDepositText.innerText);
    totalDepositText.innerText = totalDeposit + inputDeposit;
})

document.getElementById("withdrow_btn").addEventListener("click", function(){
    const inputWithdrowText = document.getElementById("withdrow_amount");
    const inputWithdrow = parseFloat(inputWithdrowText.value);

    const withdrowText = document.getElementById("total_withdrow");
    const withdrow = parseFloat(withdrowText.innerText);

    withdrowText.innerText = withdrow + inputWithdrow;
    inputWithdrowText.value = "";

    const totalWithdrowText = document.getElementById("total_balance");
    const totalWithdrow = parseFloat(totalWithdrowText.innerText);

    totalWithdrowText.innerText = totalWithdrow - inputWithdrow;
})