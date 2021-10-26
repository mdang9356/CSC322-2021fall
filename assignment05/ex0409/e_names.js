let button = document.getElementById('run-btn');
let result = document.getElementById('result');
let names = ["Cory", "Ellie", "Natalie", "Tom", "John", "May", "Anthony"];

button.addEventListener("click",function(){
    resultString = "";
    names.forEach((name)=>{
        if(name.endsWith("ie") || name.endsWith("y")){
            resultString += name + ", ";
        }
    })

    result.innerHTML = resultString;

})
