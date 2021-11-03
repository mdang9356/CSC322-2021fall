let inputArray = document.getElementsByTagName('input');
let textHolder = document.getElementsByTagName('span');
console.log(inputArray);
let storyTemplate = "Schiils are closed at Easter time and all the <span></span> get <span></span> weeks off. The <span></span> teachers also get a vacation.  There are a lot of things to do in Easter vacation. Some kids hang around and watch the <span></span>. Others go outside and play <span></span>. Little kidds will color <span></span> eggs. They use a package of <span></span> dye. They pour it in a bowl full of <span></span>. Then they dip the <span></span> in the bowl and then rinse it off. After the <span></span> are dried, you place then in the Easter <span></span> along with <span></span> chocolate bunny!";

let generateMadLib = (inputArray) => {
    document.getElementById('story').innerHTML = storyTemplate;
   
    for(let i = 0; i<inputArray.length; i++){
        textHolder[i].innerHTML = inputArray[i].value;
    }
}

let generateBtn = document.getElementById("gen-btn");
generateBtn.addEventListener('click',function(){
    generateMadLib(inputArray);
})