
// the object document will create a new emptyed object, then it will copy the .prototype of the id and assign it for the new variable.
let navLinks = document.getElementById("navLinks");


function showMenu() {
    // the typeof navLinks is object. it has all attribute which "navLinks" having
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-200px";
}