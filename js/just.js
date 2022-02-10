
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
    const amounts = parseFloat(deposit.value);
    if(typeof amounts == "string"){
        alert("Please Input number only");
    }else if( amounts < 0){
        alert("Money can not deposit negetive number");
    }else if( amounts == 0){
        alert("You can not deposit 0 ");
    }
    totalDeposit.innerText = amounts;
    deposit.value = "";
})