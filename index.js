let number = Math.floor((Math.random()*10)+1);4
let user_guess
let chances = 0

const easy=()=>{
    number = Math.floor((Math.random()*10)+1);
    document.getElementById("level").innerHTML="Level - Easy<br>Guess number between 1-10"
    chances = 0
}

const medium=()=>{
    number = Math.floor((Math.random()*100)+1);
    document.getElementById("level").innerHTML="Level - Medium<br>Guess number between 1-100"
    chances = 0
}

const hard=()=>{
    number = Math.floor((Math.random()*1000)+1);
    document.getElementById("level").innerHTML="Level - Hard<br>Guess number between 1-1000"
    chances = 0
}


document.getElementById('userForm').addEventListener('submit', function(event) 
{
    event.preventDefault();

    user_guess = document.getElementById('guess').value;
    chances++
    console.log(user_guess);
    if(user_guess == number)
        {
            document.getElementById("message").innerHTML = "Congratulations!<br> You guessed the right number which is ".concat(number).concat("<br>Your score is: ".concat(100-chances))
            document.getElementById("reset").style.display="block"
            triggerConfetti()
        }
        else if(number > user_guess)
        {
            document.getElementById("message").innerHTML = "Actual Number is greater than ".concat(user_guess)
        }
        else if(number < user_guess)
        {
            document.getElementById("message").innerHTML = "Actual Number is lesser than ".concat(user_guess)
        }
});

const reset=()=>{
    document.getElementById("message").innerHTML=""
    document.getElementById("reset").style.display="none"
    document.getElementById('guess').value = ""
    easy()
}

const triggerConfetti=()=> {
    confetti({
        particleCount: 700,
        spread: 300,
        origin: { y: 0.8 }
    });
}