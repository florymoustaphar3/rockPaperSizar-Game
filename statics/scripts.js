function ageConverter(){
    var inAge = prompt(" What year were you born? ");
    var ageInD = (2022 - inAge)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("The Age converted in days: "+ageInD);
    h1.setAttribute('id','ageInD');
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-resulr").appendChild(h1);
}
function resetBtn(){
    document.getElementById('ageInD').remove();
}
//challenge 2
function generatCat(){
    var image = document.createElement('img');
    var div = document.getElementById("flex-cat-gen");
    image.src = "cute-kitty-best-kitty.gif";
    div.appendChild(image);
}
//challenge 3
function rpsGame(yrChoice){
    console.log(yrChoice);
    var hmanChoice, botChoice;
    botChoice = numToChoice(randRpsChoice());
    console.log("computer choice:" , botChoice);
    results = getTheWinner(yrChoice.id,botChoice);
    console.log(results);
    message = winMessage(results);
    console.log(message);
    rpsFrontEnd(yrChoice.id, botChoice, message)
}
function randRpsChoice(){
    return Math.floor(Math.random()*3)
}
function numToChoice(number){
    return ['rock','paper','scissor'][number];
}
function getTheWinner(yrChoice, pcChoice){
    var dataB = {
        'rock':{'scissor' :1,'rock':0.5,'paper': 0},
        'paper':{'rock' :1,'paper':0.5,'scissor': 0},
        'scissor':{'paper':1,'scissor':0.5,'rock':0}
    };
    var yrScore = dataB[yrChoice][pcChoice];
    var pcScore = dataB[pcChoice][yrChoice];
    return [yrScore,pcScore];
}
function winMessage([yrScore,pcScore]){
    if(yrScore === 0){
        return {'message': "You Lost!", 'color':"red"}
    }else if(yrScore === 0.5){
        return {'message': "You Tied!", 'color':"yellow"}
    }else{
        return {'message': "You Won!", 'color':"green"}
    }
}
function rpsFrontEnd(yrChoice, pcChoice, winMessage){
    var iamageData = {
        'rock': document.getElementById("rock").src,
        'paper': document.getElementById("paper").src,
        'scissor': document.getElementById("scissor").src
    };
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
  
    var humanImageDiv = document.createElement('div');
    var botImageDiv = document.createElement('div');
    var winMssageDiv = document.createElement('div');

    humanImageDiv.innerHTML = "<img src='"+iamageData[yrChoice.id]+"'>"; "height = 150 ;width = 150; style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'";
    winMssageDiv.innerHTML = "<h1 style='color:"+winMessage['color']+ ";font-size: 60px; padding: 30px'>" + winMessage['message'] +"</h1>";
    botImageDiv.innerHTML = "<img src='"+iamageData[pcChoice.id]+"'>"; " height = 150; width = 150; style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'";
    
    document.getElementById('flex-box-rps-div').appendChild(humanImageDiv);
    document.getElementById('flex-box-rps-div').appendChild(winMssageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botImageDiv);
    
    //Chanllenge 4

    var allButtons = document.getElementsByTagName('button');
    console.log(allButtons);
         
    let copyAllBtn = [];
    for(let i = 0; i < allButtons.length; i++){
        copyAllBtn.push(allButtons[i].classList[1]);
    }
    function ColorChange(buttonThingy){

        if(buttonThingy.value === 'Red'){
            btnRed();
        }else if(buttonThingy.value === 'Green'){
            btnGreen();
        }else if(buttonThingy.value === 'Reset'){
            btnReset();
        }else if(buttonThingy.value === 'Random'){
            btnRandom();
        }
    }
    function  btnRed(){
        for(let i = 0; i < allButtons.length; i++){
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add('btn-danger');
        }
    }
    
    // 4:19
}