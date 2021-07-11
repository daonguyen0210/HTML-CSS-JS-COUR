









let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'div-imgCard':'#your-box #your-box-playing-cards','score': 0, 'numberofCards': 0, 'tempStoreCard' : [], 'currentScore': 0, 'drawScore': 0},

    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'div-imgCard':'#dealer-box #dealer-box-playing-cards','score': 0, 'numberofCards': 0, 'tempStoreCard' : [], 'currentScore': 0},

    'numberCard': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],

    'modernCard' : ['heart', 'tile', 'pike', 'clover'],

    'cardValue' : { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 1},

}


const YOU       = blackjackGame['you'];
const DEALER    = blackjackGame['dealer'];

const hitSound = new Audio("sounds/swish.m4a");


document.querySelector('#blackjack-hit-btn').addEventListener('click', blackjackHit);
document.querySelector( '#blackjack-stand-btn').addEventListener( 'click', dealerLogic);
document.querySelector('#blackjack-deal-btn').addEventListener('click', blackjackDeal);
function btnClickofCustom(btnClick){}

function blackjackHit(){

    if ( YOU['numberofCards'] < 3){
        let card = randomCard(YOU);

        
        defaultCardforDealer();
    
        // when click the button "Hit", the function showCard() will be involked;
    
        showCard(YOU, card);
        // show the spanScore
        showScore(YOU);
    
        



    }

    else{
        document.querySelector( YOU['scoreSpan']).textContent = "No More !!!";
        
        setTimeout(() => {
            document.querySelector( YOU['scoreSpan']).textContent = YOU['score']%10;
        }, 1000);
    }
    

}

function blackjackDeal(){
    // when click the button "Deal", the function showCard() will be involked;
    // let yourImages = document.querySelector(YOU['div-imgCard']).querySelectorAll('img');
    // for ( i = 0; i < yourImages.length; i++){
    //     yourImages[i].remove();

    let yourImages = document.querySelector( YOU['div-imgCard']);
    while( yourImages.firstChild){
        yourImages.removeChild( yourImages.firstChild);
    }

    let dealerImages = document.querySelector( DEALER['div-imgCard']);
    while ( dealerImages.firstChild){
        dealerImages.removeChild( dealerImages.firstChild);
    }

    // reset the value of A 
    blackjackGame['cardValue']['A'] = 0;

    YOU['score'] = 0;
    YOU['numberofCards'] = 0;
    YOU['tempStoreCard'] = [];
    document.querySelector( YOU['scoreSpan']).textContent = "0";

    DEALER['score'] = 0;
    DEALER['numberofCards'] = 0;
    DEALER['tempStoreCard'] = [];
    document.querySelector( DEALER['scoreSpan']).textContent = "0";

    document.querySelector( '#blackjack_result').textContent = "Let's Play !!!";
}

function dealerLogic(){


    let parent = document.querySelector( DEALER['div-imgCard']);
    while ( parent.firstChild){
        parent.removeChild( parent.firstChild);
    }


    for ( i= 0; i< 3; i++){
        let imgCard = document.createElement('img');
        
        imgCard.src = `images/${randomCard(DEALER)}.PNG`;
        imgCard.style.width = "100px";

        document.querySelector( DEALER['div-imgCard']).appendChild(imgCard);
    }


    document.querySelector( DEALER['scoreSpan']).textContent = DEALER['score'] % 10;

    compareActivePlayer();

}








    // return a random card from card property
    function randomCard(activePlayer){
        let randomIndex =   Math.floor( Math.random() * 13);
        let randomModern =  Math.floor( Math.random() * 4);

        // add score after each card is opened 10, J, Q, K = 10 points, A = 1 point
        if      ( randomIndex == 12) { activePlayer['score'] += 1;}
        else if ( randomIndex >= 8 && randomIndex <= 11 ){ activePlayer['score'] += 10;}
        else    { activePlayer['score'] += parseInt(blackjackGame['numberCard'][randomIndex]);}

        // save the card and mordern in tempStoreCard
        activePlayer['tempStoreCard'].push( blackjackGame['modernCard'][randomModern]);
        activePlayer['tempStoreCard'].push( blackjackGame['numberCard'][randomIndex]);

        return blackjackGame['modernCard'][randomModern] + '_' + blackjackGame['numberCard'][randomIndex];
    }

    function showCard(activePlayer, cardPlayer){
        // cardPlayer is random card is selected from randomCard() 

        if (  activePlayer['numberofCards'] < 3){
            let imgCard = document.createElement('img');

            // this is a new knowledge what related with  'template literals'
            imgCard.src = `images/${cardPlayer}.PNG`;
            imgCard.style.width = "100px";
            document.querySelector( activePlayer['div-imgCard']).appendChild(imgCard);

            
            // playing sound
            hitSound.play();

            activePlayer['numberofCards'] += 1;
            
        }
        
        else{
            console.log( 'hello world');
        }
    }
    
    function showScore ( activePlayer){
        document.querySelector( activePlayer['scoreSpan']).textContent = activePlayer['score'];

        if ( activePlayer['numberofCards'] == 3){
            

            setTimeout(() => {
                document.querySelector( activePlayer['scoreSpan']).textContent = activePlayer['score'] %10;
            }, 1000);
        }
    }

    // show the face_down of dealer's cards
    function defaultCardforDealer(){
        // show the face-down card
        let face_down = document.createElement('img');

        face_down.src = "images/face_down.PNG";
        face_down.style.width = "100px";
        document.querySelector( DEALER['div-imgCard']).appendChild(face_down);
    }

    function compareActivePlayer(){
        if ( YOU['tempStoreCard'].length == 6 && DEALER['tempStoreCard'].length == 6){
            let youDetermineCard = determineCards(YOU);
            let dealDetermineCard = determineCards( DEALER);


            whoWin( [youDetermineCard, dealDetermineCard]);
        }
    }

    function determineCards( activePlayer){ 

        // determine "thung pha sanh"
    
        let nameCard = [];
        let modern = [];
        
        for ( let i = 0; i < 6; i+=2){
            modern.push( activePlayer['tempStoreCard'][i]);
            nameCard.push( activePlayer['tempStoreCard'][i + 1]);
        }


        
        let valueOfDetermine;

        valueOfDetermine = isThungPhaSanh( nameCard, modern);
        if ( valueOfDetermine != "no"){
            return valueOfDetermine;        // return 'thungPhaSanh_*'
        }


        valueOfDetermine = isBoBa( nameCard, modern);
        if ( valueOfDetermine != "no"){
            return valueOfDetermine;        // return 'boBa_'
        }

        valueOfDetermine = isSanh( nameCard, modern);
        if ( valueOfDetermine != "no"){
            return valueOfDetermine;        // return 'sanh_*modern_*maxNumber;
        }

        valueOfDetermine = isThung( nameCard, modern);
        if ( valueOfDetermine != "no"){
            return valueOfDetermine;        // return "thung_*modern_maxNumb"
        }

        valueOfDetermine = isDoi ( nameCard, modern);
        if ( valueOfDetermine != "no"){
            return valueOfDetermine;        // return "doi_*number"
        }

        return ["normalCards", "noSame", "noDetermine"];
    
    }

    function whoWin (infor){
        let pointofCharacter = {"thungPhaSanh": 100, "boBa": 70, "sanh": 50, "thung": 30, "doi": 10, "normalCards": 0};
        let pointofTypeCard = { "heart": 10, "tile": 7, "pike": 5, "clover": 3, "noSame": 0};
        let pointofNumber   = { "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 11, "Q": 12, "K": 13, "A": 1, "noDetermine": 0};





        totalPointofYou = 3* ( pointofCharacter[ infor[0][0]] + pointofTypeCard[ infor[0][1]]) + 2* ( pointofNumber[ infor[0][2]]) + ( YOU['score']% 10);

        
        totalPointofDealer = 3* ( pointofCharacter[ infor[1][0]] + pointofTypeCard[ infor[1][1]]) + 2* ( pointofNumber[ infor[1][2]]) + ( DEALER['score']% 10);
        



        let winner = "nothing";

        if      ( totalPointofYou > totalPointofDealer) {
            winner = "YOU WIN !!!";

            YOU['currentScore'] += 1;
            document.querySelector( '#wins').textContent = YOU['currentScore'];
        }
        else if ( totalPointofYou < totalPointofDealer) { 
            winner = "DEALER WIN !!!";

            DEALER['currentScore'] += 1;
            document.querySelector( '#losses').textContent = DEALER['currentScore'];
        }
        else{
            winner = "DRAW !!!";

            YOU['drawScore'] += 1;
            document.querySelector( '#draws').textContent = YOU['drawScore'];
        }


        document.querySelector( '#blackjack_result').textContent = winner;

    }


















        function findMaxNumb( nameCard){
            let converNumb = [];

            if ( nameCard.indexOf( "Q") >= 0 || nameCard.indexOf( "K") >= 0){
                blackjackGame['cardValue']['A'] = 14;
            }
            else{
                blackjackGame['cardValue']['A'] = 1;
            }

            for ( i= 0; i< 3; i++){
                converNumb[i] = blackjackGame['cardValue'][nameCard[i]];
            }

            let maxnum = Math.max( ...converNumb);
            return maxnum;
        }

        function isThungPhaSanh( nameCard, modern){
            let typeModern = ['heart', 'tile', 'clover', 'pike'];

            // deternmine the nameCard            
            let maxNumber = findMaxNumb( nameCard);

            if ( nameCard.indexOf( maxNumber - 2) >= 0 && nameCard.indexOf( maxNumber - 1) >= 0){
                // there is nothing to do, because having to determine the modern of card.
            }
            else {
                return "no";
            }


            // determin the modern of cards
            if ( modern[0] === modern[1] && modern[1] === modern[2]){
                //e.g yes_heart
                return ["thungPhaSanh", typeModern.indexOf( modern[0]), maxinNumber];
            }
            return ["thungPhaSanh", "noSame", maxinNumber];

        }


        function isBoBa( nameCard, modern){
            
            // let modernofCard = {"heart": 40, "tile": 30, "pike": 20, "clover": 10};
            // let pointofCard = [];
            // for ( i= 0; i< 3; i++){
            //     // pointofCard.push( modernofCard[modern[i]]);
            // }
            console.log( modern);

            // let maxPointofModern = Math.max( ...pointofCard);
            // 
            if ( nameCard[0] == nameCard[1] && nameCard[1] == nameCard[2]){
                // return ["boBa", modern[pointofCard.indexOf( maxPointofModern)], nameCard[0]];
                return "no";
            }
            return "no";
        }

        function isSanh( nameCard, modern) {

            let maxNumber = findMaxNumb( nameCard);
            let modernofMaxNumber = modern[nameCard.indexOf( maxNumber)];

            if ( nameCard.indexOf( maxNumber -2) >= 0 && nameCard.indexOf( maxNumber -1) >= 0){
                return ["sanh", modernofMaxNumber, maxNumber];
            }
            return "no";
        }

        function isThung( nameCard, modern){
            
            if ( modern[0] == modern[1] && modern[1] == modern[2]){

                let maxNumb = findMaxNumb( nameCard);

                return ["thung", modern[0], maxNumb];
            }
            return "no";
        }

        function isDoi( nameCard, modern){
            if ( nameCard[0] == nameCard[1] || nameCard[0] == nameCard[2] ){
                return ["doi", "noSame", nameCard[0]];
            }
            
            if ( nameCard[1] == nameCard[2]){
                return ["doi", "noSame", nameCard[1]];
            }
            return "no";
        }