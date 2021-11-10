let decrease = document.getElementById('decrease');
let increase = document.getElementById('increase');
let reset = document.getElementById('reset');
let counter = document.getElementsByClassName('count')[0].innerHTML;
decrease.addEventListener('click',function(){
    counter = parseInt(counter) - 1;
    document.getElementsByClassName('count')[0].innerHTML = counter;
})

increase.addEventListener('click',function(){
    counter = parseInt(counter) + 1;
    document.getElementsByClassName('count')[0].innerHTML = counter;
})

reset.addEventListener('click',function(){
    counter = 0;
    document.getElementsByClassName('count')[0].innerHTML = 0;
})