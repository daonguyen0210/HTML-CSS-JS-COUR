// Change 1: Your Date in Days
function ageInDays(){
    var birthYear = prompt('What year were you born ?');
    var ageindayss= (2021 - birthYear) * 365;
    // DOM(JS) là một cấu trúc một web-page được tạo bởi file HTML, hoặc có thể nói DOM là một API của HTML
    // vế phải, tạo ra một node(JS) tương ứng với element(HTML), và node này được gán cho biến h1
    var h1 = document.createElement('h1');
    // tạo ra một text node(string).
    var textAnswer = document.createTextNode('You are ' + ageindayss + ' years old.');  
    //attribute(thuộc tính) là một giá trị hoặc một tên gọi, gán cho một something, mà trước đó nó không cso
    //property( đặc tính) là giá trị vốn có của nó, nó tồn tại luôn luôn cùng chủ thể.
    /*theo cách hiện thị của HTML: <h1 id="ageInDays"></h1>*/
    h1.setAttribute('class', 'ageInDays');     
    // append đoạn textAnswer vào h1-parent
    // <h1 id="ageInDays"> Your are...</h1>
    h1.appendChild(textAnswer);
    // tất cả các phần tử mang tên lớp class, chọn class mang tên result.
    var result = document.getElementsByClassName('result')[0];
    var placeholder = document.getElementsByClassName('placeholder-default')[0];
    result.removeChild(placeholder);
    result.appendChild(h1);
    console.log(result);
    // result[0].appendChild(h1);
}

function resetPage(){
    var h1 = document.createElement('h1');
    h1.setAttribute('class', 'placeholder-default');
    var textAnswer = document.createTextNode('Your Age Days is here...');
    h1.appendChild(textAnswer);

    var result = document.getElementsByClassName('result')[0];
    var ageDayEle = document.getElementsByClassName('ageInDays')[0];
    result.removeChild(ageDayEle);
    result.appendChild(h1);
    console.log(result);
}

