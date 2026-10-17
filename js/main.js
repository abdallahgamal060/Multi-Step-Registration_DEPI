    function validateData(){
    let user = document.getElementById("inputUserName").value;
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    let confirm = document.getElementById("inputConfirmPassword").value;
    let result = document.getElementById("result");

    result.setAttribute("class","text-center alert d-block theme-danger p-4");

    if(user =="" && email =="" && password =="" && confirm ==""){
        result.innerHTML = "Please Enter Data";
        return false;
    }
    else if(user.length<5 || user.length>15){
        result.innerHTML = "please enter characters in 5-15";
        return false;
    }
    else if(email.indexOf("@",1)==-1 || email.indexOf(".com",5)==-1){
        result.innerHTML ="Enter Valid Email"
        return false;
    }
    else if(password.length < 8){
        result.innerHTML = "weak password";
        return false;
    }
    else if(password != confirm){
        result.innerHTML = "password not matched";
        return false;
    }
        
     
}