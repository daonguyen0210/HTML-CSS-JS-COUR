
// empty line: ^(\s)*$\n


function clickHome(){
    var content = document.getElementsByClassName('content')[0];
    while(content.firstChild){
        var firstChildEle = content.firstChild;
        content.removeChild(firstChildEle);
    }
}
function clickGenerator(){
    var image = document.createElement('img');
    var content = document.getElementsByClassName('content')[0];
    image.src = "./img/dog.PNG";
    image.setAttribute('width','200px');
    image.setAttribute('height', '80px');
    content.appendChild(image);
}
// Challenge 3: Rock, Paper and Scissors
function rpsGame(yourChoice){
    console.log(yourChoice);
    console.log(yourChoice.src);
    let humanChoice, botChoice;
    // type of function is annoymous function
    let randomImg = function(){ return Math.floor( Math.random() * 3 ); };
    let numberToChoice = function(number){ return ['rock', 'paper', 'scissors'][number]; };
    // TODO choose the random value

    /* This keyword được khai báo ngầm nên nó sẽ đại diện cho object được khai báo*/
    // yourChoice.id returns the id's value của nó.
    humanChoice = yourChoice.id;
    botChoice = numberToChoice( randomImg());

    // TODO choose who is winner
    let results = decideWinner( humanChoice, botChoice);
    let message = finalMessage(results);

    rpsFontend(humanChoice, botChoice, message);

}

function decideWinner( humanChoice, botChoice){
    let rpsDataBase = {
        // the left value is for humanChoice, and the right value is for botChoice
        // the final value is value of human final batte, 1: human win, 0.5: both of them are tied, 0: human lose
        'rock': {'rock': 0.5, 'paper': 0, 'scissors': 1},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'rock': 0, 'paper': 1, 'scissors': 0.5}
    };
    /*
    Trong JavaScript ,mã định danh(identifier) là trường hợp nhạy cảm và có thể chứa Unicode chữ cái, $, _, và chữ số (0-9), NHƯNG KHÔNG THỂ BẮT ĐẦU BẰNG MỘT CHỮ SỐ
    Có hai phương thức truy cập vào property/ attribute đó là dot / bracker notation
        +, phương thức dot buộc tên của property / attribute là một identifier
        +, phương thức bracket notation thì không buộc property / attribute là một mã định danh, cứ tống hết mẹ vào ngoặc
    */ 
    let valueOfBot = rpsDataBase[humanChoice][botChoice];
    return valueOfBot;
}

function finalMessage(results){
    switch ( results) {
        // protype of return [message, color_of_human_choice, color_of_bot_choice]
        case 0: return {'message':'You Lose', 'color':'red'};
        case 0.5: return {'message':'You Tied', 'color':'yellow'};
        case 1: return {'message':'You Win', 'color':'green'};
    }
}

function rpsFontend(humanChoice, botChoice, message){
    let imgDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };

    //remove the div element
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //create the element HTML z
    let humanDiv = document.createElement('div');
    let messageDiv = document.createElement('div');
    let botDiv = document.createElement('div');

    humanDiv.innerHTML = '<img src="' + imgDataBase[humanChoice] + '" alt="image" style="width: 180px; height: 150px;  box-shadow: 0px 0px 7px 7px ' + message['color'] + ';">';

    messageDiv.innerHTML = '<h1 style="width: 100px; height: 150px; font-size: auto; font-family: ' +'Lato'+', sans-serif; color: gold; text-align: center">' + message['message'] + '</h1>';

    botDiv.innerHTML = '<img src="' + imgDataBase[botChoice] + '" alt="image" style="width: 180px; height: 150px;  box-shadow: 0px 0px 7px 7px blue;">';

    document.getElementsByClassName('challenge-3')[0].getElementsByClassName('nav')[0].appendChild(humanDiv);
    document.getElementsByClassName('challenge-3')[0].getElementsByClassName('nav')[0].appendChild(messageDiv);
    document.getElementsByClassName('challenge-3')[0].getElementsByClassName('nav')[0].appendChild(botDiv);
}