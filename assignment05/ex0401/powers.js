let logResult = () =>{
    const lowerLimit = 5;
    const higherLimit = 15;
    let result = "";
    result += "Number || Square || Cube";
    result += "\n=========================";
    for(let i = lowerLimit; i<=higherLimit; i++){
        result += "\n" + i + " || " + Math.pow(i,2) + " || " + Math.pow(i,3);
        result += "\n=========================";
    }
    return result;
}

logResult();

let button = document.getElementById('run-btn');
button.addEventListener("click",function(){
    alert(logResult());
})