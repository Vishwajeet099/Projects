let gameSeq = [];
let userSeq = [];

let btns = ["red","purple","yellow","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(!started){
        console.log("game started");
        started = true;

        setTimeout(levelUp , 1000);
    }
});

function levelUp(){

    userSeq =[];
    level++;

    h2.innerText = `Level ${level}`;

    let indx = Math.floor(Math.random()*4);
    let randomColor = btns[indx];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    gameFlash(randomBtn);
}

function gameFlash(btn){
    btn.classList.add("gameflash");

    setTimeout(function(){
        btn.classList.remove("gameflash")
    }, 100);
}

function checkAns(indx){
    if(userSeq[indx] === gameSeq[indx]){
        document.querySelector('body').style.backgroundColor = "lightgreen";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "rgb(171, 116, 220)";
        },150);
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    }else{
        h2.innerHTML= `Game over!!! Your score was <b>${level}</b>.<br> Press any key to restart`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "rgb(171, 116, 220)";
        },150);
        reset();
    }
}

function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash")
    }, 100);
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");

    userSeq.push(userColor)
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn")

for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    level = 0;
    started = false;
    gameSeq=[];
    userSeq=[];
}