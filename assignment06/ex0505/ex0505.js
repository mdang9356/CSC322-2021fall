let apple = document.getElementById("apple");
let organge = document.getElementById("orange");
let banana = document.getElementById("banana");
const applePrice = .59;
const orangePrice = .49;
const bananaPrice = .39;



let addTotal = (apple, orange, banana) =>{
    let total = apple * applePrice + orange * orangePrice + banana * bananaPrice;
    let grandTotal = total * 1.05
    return grandTotal.toFixed(2);
}

let checkValue = (value) =>{
    if(value >= 0 && value <= 99){
        return true;
    }

    else{
        return false;
    }
}

let checkFormInput = (apple, orange, banana) => {
    return checkValue(apple) && checkValue(orange) && checkValue(banana);
}

let submitButton = document.getElementById('submit-btn')
submitButton.addEventListener('click',function(){
    if(checkFormInput(apple.value, orange.value, banana.value)){
        alert(`Your total cost is  $${addTotal(apple.value, orange.value, banana.value)}`)
    }

    else{
        alert("Check input value!");
    }
})