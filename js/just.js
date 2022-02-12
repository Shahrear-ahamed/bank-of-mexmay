function inputValue(inputValue) {
    const inputText = document.getElementById(inputValue);
    const inputAmount = parseFloat(inputText.value);
    inputText.value = "";
    return inputAmount;
}
function changeMoney(subAmount, previousMoney) {
    const moneyText = document.getElementById(subAmount);
    const moneyAmount = parseFloat(moneyText.innerText);
    moneyText.innerText = moneyAmount + previousMoney;
    return moneyText;
}
function finalBalance() {
    const totalBalanceText = document.getElementById("total_balance");
    const balanceCheck = parseFloat(totalBalanceText.innerText);
    return balanceCheck;
}
function changeTotalBalance(totalBalance, inputAmount, isAdd) {
    const totalBalanceText = document.getElementById(totalBalance);
    const totalBalanceAmount = finalBalance();
    if (isAdd == true) {
        totalBalanceText.innerText = totalBalanceAmount + inputAmount;
        return totalBalanceText;
    } else {
        totalBalanceText.innerText = totalBalanceAmount - inputAmount;
        return totalBalanceText;
    }
}
document.getElementById("deposit_btn").addEventListener("click", function () {
    const depositInput = inputValue("deposit_amount");
    if (depositInput > 0) {
        changeMoney("total_deposit", depositInput);
        changeTotalBalance("total_balance", depositInput, true);
    } else {
        return alert("input positive number only")
    }
});
document.getElementById("withdrow_btn").addEventListener("click", function () {
    const withdrowInput = inputValue("withdrow_amount");
    const currentBalance = finalBalance();
    if (withdrowInput > 0 && currentBalance > withdrowInput) {
        changeMoney("total_withdrow", withdrowInput);
        changeTotalBalance("total_balance", withdrowInput, false);
    } if (currentBalance < withdrowInput) {
        return alert("you can not withdraw money how much you have")
    }
});