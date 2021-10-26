let button = document.getElementById('run-btn');
let result = document.getElementById('result');
let initialString = document.getElementById('test-string');

const nameString = "Scott, Michael D";
let stringPattern = /^[A-Z]\S+,\s\S+\s[A-Z]/;

initialString.innerHTML = nameString;

let testString = (nameString) => {
    return stringPattern.test(nameString)
}

button.addEventListener('click',function(){
    result.innerHTML =  testString(nameString);
})