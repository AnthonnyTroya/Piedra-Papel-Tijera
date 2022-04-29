// Valores para dar un valor
const rock = "rock";
const paper = "paper";
const cut = "cut";

const tie = 0;
const win = 1;
const lost = 2;


// Variables para recoger los valores del html
const rockbtn = document.getElementById("rock");
const cutbtn = document.getElementById("cut");
const paperbtn = document.getElementById("paper");
// Evento como el onclick :)
rockbtn.addEventListener("click", () => {
    play(rock);
});
paperbtn.addEventListener("click", () => {
    play(paper);
});
cutbtn.addEventListener("click", () => {
    play(cut);
});
// Variables para mostrar el resultado
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");


function play(userOption) {
    const machineOption = Math.floor(Math.random() * 3);
    const result = calcResult(userOption, machineOption);
    userImg.src = "img/" + userOption + ".jpg";
    machineImg.src = "img/" + machineOption + ".jpg";


    switch (result) {
        case tie:
            resultText.innerHTML = "Has Empatado";
            break;
        case win:
            resultText.innerHTML = "Has Ganado";
            break;
        case lost:
            resultText.innerHTML = "Has Perdido";
            break;
    }

}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return tie;

    } else if (userOption === rock) {
        if (machineOption === paper) return lost;
        if (machineOption === cut) return win;

    } else if (userOption === paper) {
        if (machineOption === cut) return lost;
        if (machineOption === rock) return win;

    } else if (userOption === cut) {
        if (machineOption === rock) return lost;
        if (machineOption === paper) return win;
    }
}