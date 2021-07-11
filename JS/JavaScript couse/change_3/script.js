// Challenge color of all buttons

// trong property là Elements tức là mọi button trong html được lưu trong array all_btn
let all_btn = document.getElementsByTagName('button');


let copyAllBtn = [];
for ( let i= 0;i < all_btn.length; i++){
    /* tại tag button, class attribute có 2 name đó là btn và btn-*, việc một attribute có nhiều name sẽ được lưu dưới dạng array, và việc truy cập name_attribute đó sẽ được truy cập dưới dạng index
    */
    // button có class attribute 2 tên, nhưng copyAllBtn nhận tên Btn-*, nên classList[1];
    copyAllBtn.push(all_btn[i].classList[1]);
}




function buttonColorChange(buttonThingy){

    let value = buttonThingy.value;

    if      ( value === 'default'){ buttonsDefault();}
    else if ( value === 'red') { buttonRed();}
    else if ( value === 'green') { buttonGreen();}
    else if ( value === 'yellow') { buttonYellow();}
    else if ( value === 'orange') { buttonOrange();}
    else if ( value === 'blue') { buttonBlue();}


}

function buttonsDefault(){
    for ( let i = 0; i < all_btn.length; i++){
        let default_color = 'btn-' + all_btn[i].id;
        all_btn[i].classList.replace( all_btn[i].classList[1], default_color);
    }

}

function buttonRed(){
    for ( let i = 0; i < all_btn.length; i++){
        all_btn[i].classList.replace(all_btn[i].classList[1], 'btn-red');
    }
}

function buttonGreen(){
    for ( let i = 0; i < all_btn.length; i++){
        all_btn[i].classList.replace(all_btn[i].classList[1], 'btn-green');
    }
}

function buttonYellow(){
    for ( let i = 0; i < all_btn.length; i++){
        all_btn[i].classList.replace(all_btn[i].classList[1], 'btn-yellow');
    }
}

function buttonOrange(){
    for ( let i = 0; i < all_btn.length; i++){
        all_btn[i].classList.replace(all_btn[i].classList[1], 'btn-orange');
    }
}

function buttonBlue(){
    for ( let i = 0; i < all_btn.length; i++){
        all_btn[i].classList.replace(all_btn[i].classList[1], 'btn-blue');
    }
}