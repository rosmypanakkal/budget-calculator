let total = 0;

function income() {
    let amount = document.getElementById("income").value;
    amount = Math.floor(amount);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid income amount");
        return;
    }

    total += amount;

    const usersDetails = {
        balance: total
    };

    localStorage.setItem("totalBalance", JSON.stringify(usersDetails));
    alert("Details added Successfully");
    document.getElementById("result").innerHTML = `<p>Your Monthly income is ${total}  </p>`;
}


function expence(){
    let amnt=document.getElementById("expences").value;
amnt=Math.floor(amnt);

if (isNaN(amnt) || amnt <= 0) {
    alert("Please enter a valid income amount");
    return;
}

total -= amnt;
let expe=0
expe+=amnt
const usersDetails = {
    balance: total
};

localStorage.setItem("totalBalance", JSON.stringify(usersDetails));
alert("Details added Successfully");
document.getElementById("expencecal").innerHTML = `<p>Your Monthly expense is ${expe}<br> And your current balance is ${total}</p>`;
}

function add(){
    expence();
    
}