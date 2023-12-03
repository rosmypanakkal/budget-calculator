function register(){
    const usersDetails={
        Name:reg_name.value,
        phone:reg_phn.value,
        password:reg_pwd.value
    }
    if(usersDetails.Name==""||usersDetails.phone==""||usersDetails.password==""){
        alert('Please enter full details')
    }
    else{
        if(usersDetails.phone in localStorage)
        {
            alert('Already registered')
        }
        else{
            localStorage.setItem(usersDetails.phone,JSON.stringify(usersDetails))
            alert("Details added Successfully")
            window.location='./login.html'
        }
    }
}