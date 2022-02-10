// here are login page js 
document.getElementById("login_btn").addEventListener("click", function(){
    const userEmail = document.getElementById("user_email");
    const userPass = document.getElementById("user_pass");

    let email = userEmail.value;
    let pass = userPass.value;

    if(email == "user@gmail.com" && pass == "shahrear"){
        window.location.href = "home.html"
    }else if(email != "user@gmail.com"){
        alert("user email id is wrong");
    }else if(pass != "shahrear"){
        alert("your password is wrong")
    }
})


// home page are here 