

let button = document.getElementById('run-btn');
let result = document.getElementById('result');
let enteredNumber = [];

button.addEventListener("click",function(){
    const numOfPrompt = 3;
    let i = 0;
    while(i < numOfPrompt){
        let number = prompt(`Please enter #${i+1} number: `);
        enteredNumber.push(number);
        console.log(enteredNumber);
        i++
    }
    result.innerHTML = "Largest number is: "  + Math.max(...enteredNumber);
    enteredNumber = [];

})

