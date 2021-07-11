console.log('hello');
// alert('yo');

// // variables
// var b = 'smoothie';
// console.log(b); 

// var someNumber = 45;
// console.log(someNumber);

// document.getElementById('someText');
// document.getElementById('someText').innerHTML= 'hello world';

// // lấy thông tin từ thông báo
// var age = prompt('What is your age?');
// console.log(age);
// document.getElementById('someText').innerHTML = age;


// // Numbers in JavaScript
// var num1 = 5;
// num1 = num1 + 1;
// //increment num1 by 1
// num1++;
// console.log( num1 );
// //deincement num1 by 1
// num1--;
// console.log( num1 );

// //devide, mutiply*, remainder %
// console.log(num1 % 5);

// // increment/decrement any number you want
// num1 += 6;
// console.log(num1);
// num1 -= 4;
// console.log(num1);


// // Functions
// function fun(){
//     console.log('hello world');
//     alert('this is an alert of funtion')
// }

// fun();

// /* let's create a function, that take in a name and says hello followed by your name 
// Name: "quati"
// Return: "hello quari"*/ 
// function greeting(){
//     var name = prompt('What is your name?');
//     var result = 'hello ' + name;
//     console.log(result)
// }

// greeting();

// // how do we add 2 numbers together in a function?
// function sumNumbers( num1, num2 ){
//     var result = num1 + num2;
//     console.log( num1 + num2);
//     console.log(result);
// }

// sumNumbers(3, 5);
// sumNumbers('hello', ' quari');
// sumNumbers('10', '10');



/* while loops
var num = 0;
while ( num < 100){
    num += 1;
    console.log(num);
}*/

/*for loops
// từ khóa khai báo var và let có giá trị tương đương nhau trong vòng lặp loops
for ( var num = 0; num <= 100; num++){
    console.log(num);
}

for ( let num = 0; num < 10; num++){
    console.log(num);
}*/

// // DATA types
// let yourAge = 19;   //number
// let yourName = 'bob';   //string
// let name = {first: 'jane', last: 'Doe'};    //object
// let truth = false;  //boolean
// let groceries = ['apples', 'banana', 'oranges'];    //aray 
// let random; //underfined
// let nothing = null; //value null

// // String in javascript (common methods)
// let fruit = 'banana';
// let moreFruit = 'banana\napple';
// console.log(moreFruit); 

// console.log(fruit.length);  //trả về số kí trự của string
// // trả về index của đối tượng trong string, nếu  no exist thì trả về -1;
// console.log(fruit.indexOf('an')); 

// //tách đối tượng ra khỏi chuỗi
// console.log(fruit.slice(2,-1));

// //thay thế trong string
// //.replace( source, destination);
// console.log(fruit.replace('ba', 'haha'));

// //uppercase, lowercase
// console.log(fruit.toUpperCase());
// console.log(fruit.toLowerCase());

// //lấy kí tự tại index(n)
// console.log(fruit.charAt(2));

// //split, có chức năng phân tách string thành các thành phần, phan tách bởi đối tượng ở trong ''
// console.log(fruit.split('a')); 


// // Array
// //có hai cách để create array
// let fruitA = ['banana', 'apple', 'orange', 'pineapples'];
// let fruitB = new Array('banana', 'apple', 'orange', 'pineapples');

// // alert(fruitB[1]);
// console.log(fruitB[2]); //access value at index 2nd

// //change value of array
// fruitB[1] = 'pear';
// console.log(fruitB);

// for ( let ind = 0;ind < fruitB.length; ind++){
//     console.log(fruitB[ind]);
// }


// //array common methods
// var fruits = new Array('banana','pear','apple','pineapple');
// console.log(fruits); 

// console.log('to String', fruits.toString()); 
// //đặt một kí tự ở giữa các ele
// console.log(fruits.join('-'));
// //tách thành phần cuối cùng ra khỏi array
// console.log(fruits.pop());      //remove last item
// //thêm ele vào cuối chuỗi
// console.log(fruits.push('backberries'), fruits);    //appends
// fruits[fruits.length] = 'new fruit';
// console.log(fruits);

// //remove first element from an array
// fruits.shift();
// console.log(fruits);

// //add first element to an array
// fruits.unshift('kiwi');
// console.log(fruits);

// //combianary between 2 array 
// let vegetables = ['asparagus', 'tomato', 'broccoli'];
// let allGroceries = fruits.concat(vegetables);
// console.log(allGroceries);

// //reverse an array
// console.log(allGroceries.reverse());
// console.log(allGroceries.sort());

// let sumNumbers = [5,2,1,0,14,12,852,3];
// console.log(sumNumbers.sort());
// console.log(sumNumbers.sort(function(a, b) { return a-b}));
// console.log(sumNumbers.sort(function(a, b) { return b-a}));

// let emptyArray = new Array();
// for ( let num = 0; num < 10; num++){
//     emptyArray.push(num);
// }
// console.log(emptyArray);


// //objects in javascript
// //directionaries in python

// let student = {
//     first: 'quari', 
//     last: '20', 
//     age: 20, 
//     height: 170,
//     stu_infor: function(){
//         return this.first + '\n' + this.last + '\n' + this.age;
//     }
// };
// console.log(student.first);
// console.log(student.last);
// student.first = 'raheh';    //change the value
// console.log(student.first);
// console.log(student.age++, ++student.age);
// //create a function in object;
// console.log(student.stu_infor());


// // CONDITIONAL, control flows (if else)
// let num = 20;
// if ( num >= 18 && num < 20) {
//     console.log('the num less than 20' + num);
// } else {
//     console.log('the num bigger than 20 ' + num);
// }
// //switch statements
// //differentiate between weekday vs weekend
// // let date = prompt('enter today');
// let date = 'monday';
// switch (date) {
//     case 'monday':
//         console.log('today is ' + 2);
//         break;
//     case 'tuesday':
//         console.log('today is ' + 3);
//         break;
//     case 'wendsday':
//         console.log('today is ' + 4);
//         break;
//     case 'thursday':
//         console.log('today is ' + 5);
//         break;
//     case 'friday':
//         console.log('today is ' + 6);
//         break;    
//     case 'saturday':
//         console.log('today is ' + 7);
//         break;
//     default:
//         console.log('today is ' + 'sunday');
//         break;
// }


































































































































































