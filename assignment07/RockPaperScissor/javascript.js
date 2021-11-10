$(document).ready(function(){
    let humanSelection;
    let computerSelection = ['rock','paper','scissor']
    $('.selection-container span').on('click',function(e){
        $('.selection-container span').removeClass('highlight');
        $(e.currentTarget).addClass('highlight');
        humanSelection = $(e.currentTarget).attr('id');
        console.log(humanSelection);
        let result = play(humanSelection);
        countScore(result);

        $('.result p').removeClass('hide');
        $('.result p').text(result);
        
    })

    let play = (humanSelection) =>{

        let rand = Math.floor(Math.random()*3);
        let computerChoice = computerSelection[rand];
        let index = computerSelection.indexOf(computerChoice);
        $('.computer span').removeClass('highlight');
        $('.computer span').eq(index).addClass('highlight');
        
        if(humanSelection == 'rock' && computerChoice == 'scissor'){
            return 'win'
        }

        else if(humanSelection == 'rock' && computerChoice == 'paper'){
            return 'lose'
        }

        else if(humanSelection == 'paper' && computerChoice== 'rock'){
            return 'win'
        }

        else if(humanSelection == 'paper' && computerChoice == 'scissor'){
            return 'lose'
        }

        else if(humanSelection == 'scissor' && computerChoice == 'rock'){
            return 'lose'
        }

        else if(humanSelection == 'scissor' && computerChoice == 'paper'){
            return 'win'
        }

        else {
            return 'draw'
        }
    }

    let countScore = (result) => {
        let userScore = $('#user-score').text();
        let computerScore = $('#computer-score').text();
        if(result === 'win'){
            userScore = parseInt(userScore) + 1;
            $('#user-score').text(userScore)
        }

        else if(result === 'lose'){
            computerScore = parseInt(computerScore) + 1;
            $('#computer-score').text(computerScore);       
         }
    }
})