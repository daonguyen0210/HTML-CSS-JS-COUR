/*Data TYpes:
underfined, null, boolean, string, symbol, number, and object */  


// var is going to be able to be used throughout your whole program
var myName = 'Baue';

myName = 8;

// let will only be used within the scope of where you declared 
let ourName = 'freeCodeCamp';

const pi = 3.14;
// từ khóa Var là global keyword, nếu trong function mà không khai báo biến thì mặc định    nó là global



// có hai kiểu để convert type là tự động conver hoặc sử dụng parseInt() và parseFloat()


// Comparision operators
/*
== equal
=== equal value and same type
!== not equal value ỏ not same type
*/ 


/* 
{} là object 
[] là array,  
*/ 


var trainer= {
    name: 20,
    subject: ["math", "physic"],
    address: "hanoi"
}

console.log(typeof(trainer));
console.log(trainer);
//xóa các property của object
delete trainer.address;
console.log(trainer);

// CÁC CÁCH TẠO MỘT FUNCTIONS
/*
1   Named Fucntions 
    - has a unique name
    - can be called/used in multiple places

    examples: 
        function addNum(a,b){
            return a+b;
        }

    var d = addNum(4,3);

2   Anonymous Functions:
    + does not have a name
    + can be used at one place only(when it is called immediately after it is defined, or actual argument to function)
    + the function defined is used as an experssion
    + can be stored in a variable
    + passed as an actual argument to a function
    + can be returned as a value by a function

    - stored in a variable
        var add = function(a,b){ return a+b ;};
        add( 2, 3);

    - passed as an argument to another function
        setTimeout( function()
            { alert("this message is displayed after 5 seconds")},
            5000
        );
        

3   CONSTRUCTORS:
    + a constructor is called when an object is created using the new keyword
    
    + example:
        var addFunc = new Function( "a", "b", "return a+ b;");

        var c = addFunc( 2, 3);

*/ 


/*browser object model_BOM: Mô hình trình duyệt obj
+browser objects are global objects
+available throughtour the javascript code
+BOM allows js code to interact with the browser properties
một windows objects có các đối tượng khác nhau như sau:
window obj:
    +, location obj
    +, history obj
    +, navigator obj
    +, screen obj
    +, document obj
        +,forms obj
        +, images obj
        +, links obj*/ 


//MỘT SỐ PROPERTIES CỦA SCREEN OBJ
/*
screen.width : return the width ò the users screen

screen.height : return the height of the users

screen.availWidth: return the width of the users    screen, excluding the features like windows taskbar

screen.availHeight: returns the height of users screen, excluding features like windows taskbar

screen.colorDepth: return the number of bits used to display one color

screen.pixelDepth: return the pixel of the screen
*/ 


// MỘT SỐ PROPERTIES CỦA NAVIGATOR OBJ
/*
+, navigator.appName: returns the application name on the browser

+, navigator.appCodeName: returns the application codename on the browser

+, navigator.platform: returns the platform(OS) name

+, navigator.cookieEnabled: returns true if cookies are enabled

+, navigator.product: returns the product name of the browser engine.
*/ 


// MỘT SỐ PROPERTIES của LOCATION OBJ
/*
location obj can be used to:
    +, get the current page address(URL)
    +, redirect the browser to a new page.


+, location.href: returns the href(URL) of the current page

+, location.hostname: returns the domain name of the web host

+, location.pathname: returns the path and filename of the current page

+, location.protocol: returns the web protocol used (http: or https:)

+, location.assign: load a new document
*/ 



// MỘT SỐ PROPERTIES của HISTORY OBJ
/*
contains the browsers history

+, history.back(): same as cliking the back in the browser

+, history.forward(): same as clicking forward in the browser
*/


// MỘT SỐ PROPERTIES của DOCUMENT OBJ(DOM)
/*
it is a standard object model and programming interface for HTML

it defines:
    + the HTML elements as objects
    + the properties of all html elements
    + methods to access all html elements
    +the events for all html elements

DOM of the page is created by the browser, when a webpage is loaded

the html DOM is constructed as a tree of obj

What can JS do with DOM:
    + JS + DOM = Dynamic HTML on Client-Side
    + Change all the HTML elements and attributes in the page
    + change all the CSS styles in the page
    + add and remove existing html elements and attributes
    + js can react to all existing html events in the page
    + js can create new html events in the page



DOM - Finding elements
+ the document object represets your web page
+ to access any html element, you will start with accesing the document object and DOM 

    - getElementById(): gets the html element with specified ID

    - getElementsByClassName(): Gets the html elements with specified class name

    - getElementsByTagName(): get the html elements with specified element tag
*/