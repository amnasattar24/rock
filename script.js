let userScor = 0;
let compScor = 0;

const choices = document.querySelectorAll(".choic");
const msg = document.querySelector("#msg");

const userScorPara = document.querySelector("#user-scor");
const compScorPara = document.querySelector("#comp-scor");

let genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () =>{
    msg.innerText ="Game was Draw";
    msg.style.backgroundColor = "#081b31"
    msg.style.color = "#fff"
}
const showWinner = (userWin , userChoice,compChoice) =>{
    if(userWin){
    userScor++;
    userScorPara.innerText = userScor;
    msg.innerText =`You Win!. Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Yellow";
    msg.style.color = "#081b31"
    } else {
        compScor++;
        compScorPara.innerText = compScor;
        msg.innerText =`You Lose!. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
    
}

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false:true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissors"? false:true;
        } else{
            userWin = compChoice === "rock"? false:true;
        }
        showWinner(userWin , userChoice, compChoice);
    }

}

choices.forEach((choic) =>{
    choic.addEventListener("click",() =>{
        const userChoice = choic.getAttribute("id");
        playGame(userChoice);
    });
});