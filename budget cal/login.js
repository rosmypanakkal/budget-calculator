function login(){
    phone=login_phn.value,
    pwd=login_pwd.value
    console.log(phone,pwd);
    if(phone in localStorage){
        usersDetails=JSON.parse(localStorage.getItem(phone))
        if(phone==usersDetails.phone){
            alert('Login Successfull')
            window.location='./user.html'
        }
        else{
            alert('Incorrect password')
        }
    }else{
        alert('Invalid Phone number')
    }
}