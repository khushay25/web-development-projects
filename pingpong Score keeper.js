const resetbutton=document.querySelector('#reset');
const gamepointselector=document.querySelector('#gamepointselector');

const p1={
    button:document.querySelector('#p1button'),
    score:0,
    display:document.querySelector('#p1display')
}
const p2={
    button:document.querySelector('#p2button'),
    score:0,
    display:document.querySelector('#p2display')
}

let gamepoint=5;
let isGameOver=false;

function scoreKeeper(player, opponent){
    if(!isGameOver) {
        player.score+=1;
        if(player.score===gamepoint){
            isGameOver=true;
            player.display.classList.add("winner");
            opponent.display.classList.add("loser");
            player.button.disabled=true;
            opponent.button.disabled=true;
        }
        player.display.textContent=player.score;
    }
}

p1button.addEventListener('click', function(){
    scoreKeeper(p1,p2);   
})

p2button.addEventListener('click',function(){
    scoreKeeper(p2,p1);
})

gamepointselector.addEventListener('change', function(){
    gamepoint=parseInt(this.value);
    reset();
})

resetbutton.addEventListener('click', reset)

function reset(){
    isGameOver=false;
    for(p of [p1,p2]){
        p.score=0;
        p.display.textContent=0;
        p.display.classList.remove("loser","winner");
        p.button.disabled=false; 
    }
}
