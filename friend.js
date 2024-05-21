let cell1 = document.querySelector('.cell1');
let cell2 = document.querySelector('.cell2');
let cell3 = document.querySelector('.cell3');
let cell4 = document.querySelector('.cell4');
let cell5 = document.querySelector('.cell5');
let cell6 = document.querySelector('.cell6');
let cell7 = document.querySelector('.cell7');
let cell8 = document.querySelector('.cell8');
let cell9 = document.querySelector('.cell9');

let cell1Txt = document.querySelector('.cell1Txt');
let cell2Txt = document.querySelector('.cell2Txt');
let cell3Txt = document.querySelector('.cell3Txt');
let cell4Txt = document.querySelector('.cell4Txt');
let cell5Txt = document.querySelector('.cell5Txt');
let cell6Txt = document.querySelector('.cell6Txt');
let cell7Txt = document.querySelector('.cell7Txt');
let cell8Txt = document.querySelector('.cell8Txt');
let cell9Txt = document.querySelector('.cell9Txt');

let counter = 0;

cell1.addEventListener("click", function(){
    if (!cell1.classList.contains('taken')) {
        if (counter % 2 == 0) {
            cell1Txt.innerHTML = 'X';
            cell1Txt.style.color = "black";
        } else {
            cell1Txt.innerHTML = 'O';
            cell1Txt.style.color = "black";
        }
        cell1.classList.add('taken');
        counter++;

        if (cell1Txt.innerHTML == 'X' && cell2Txt.innerHTML == 'X' && cell3Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell2.style.backgroundColor = "green";
            cell3.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell4Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell6Txt.innerHTML == 'X'){
            cell4.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell7Txt.innerHTML == 'X' && cell8Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell7.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'X' && cell4Txt.innerHTML == 'X' && cell7Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell4.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell2Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell8Txt.innerHTML == 'X'){
            cell2.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'X' && cell6Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell3.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell7Txt.innerHTML == 'X'){
            cell3.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell2Txt.innerHTML == 'O' && cell3Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell2.style.backgroundColor = "green";
            cell3.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell4Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell6Txt.innerHTML == 'O'){
            cell4.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell7Txt.innerHTML == 'O' && cell8Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell7.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell4Txt.innerHTML == 'O' && cell7Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell4.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell2Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell8Txt.innerHTML == 'O'){
            cell2.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'O' && cell6Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell3.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell7Txt.innerHTML == 'O'){
            cell3.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1.classList.contains('taken') && cell2.classList.contains('taken') && cell3.classList.contains('taken') && cell4.classList.contains('taken') && cell5.classList.contains('taken') && cell6.classList.contains('taken') && cell7.classList.contains('taken') && cell8.classList.contains('taken') && cell9.classList.contains('taken')){
            cell1.style.backgroundColor = "red";
            cell2.style.backgroundColor = "red";
            cell3.style.backgroundColor = "red";
            cell4.style.backgroundColor = "red";
            cell5.style.backgroundColor = "red";
            cell6.style.backgroundColor = "red";
            cell7.style.backgroundColor = "red";
            cell8.style.backgroundColor = "red";
            cell9.style.backgroundColor = "red";

            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
    }
});

cell2.addEventListener("click", function(){
    if (!cell2.classList.contains('taken')) {
        if (counter % 2 == 0) {
            cell2Txt.innerHTML = 'X';
            cell2Txt.style.color = "black";
        } else {
            cell2Txt.innerHTML = 'O';
            cell2Txt.style.color = "black";
        }
        cell2.classList.add('taken');
        counter++;

        if (cell1Txt.innerHTML == 'X' && cell2Txt.innerHTML == 'X' && cell3Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell2.style.backgroundColor = "green";
            cell3.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell4Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell6Txt.innerHTML == 'X'){
            cell4.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell7Txt.innerHTML == 'X' && cell8Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell7.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'X' && cell4Txt.innerHTML == 'X' && cell7Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell4.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell2Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell8Txt.innerHTML == 'X'){
            cell2.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'X' && cell6Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell3.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell7Txt.innerHTML == 'X'){
            cell3.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell2Txt.innerHTML == 'O' && cell3Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell2.style.backgroundColor = "green";
            cell3.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell4Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell6Txt.innerHTML == 'O'){
            cell4.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell7Txt.innerHTML == 'O' && cell8Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell7.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell4Txt.innerHTML == 'O' && cell7Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell4.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell2Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell8Txt.innerHTML == 'O'){
            cell2.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'O' && cell6Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell3.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell7Txt.innerHTML == 'O'){
            cell3.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1.classList.contains('taken') && cell2.classList.contains('taken') && cell3.classList.contains('taken') && cell4.classList.contains('taken') && cell5.classList.contains('taken') && cell6.classList.contains('taken') && cell7.classList.contains('taken') && cell8.classList.contains('taken') && cell9.classList.contains('taken')){
            cell1.style.backgroundColor = "red";
            cell2.style.backgroundColor = "red";
            cell3.style.backgroundColor = "red";
            cell4.style.backgroundColor = "red";
            cell5.style.backgroundColor = "red";
            cell6.style.backgroundColor = "red";
            cell7.style.backgroundColor = "red";
            cell8.style.backgroundColor = "red";
            cell9.style.backgroundColor = "red";

            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
    }
});

cell3.addEventListener("click", function(){
    if (!cell3.classList.contains('taken')) {
        if (counter % 2 == 0) {
            cell3Txt.innerHTML = 'X';
            cell3Txt.style.color = "black";
        } else {
            cell3Txt.innerHTML = 'O';
            cell3Txt.style.color = "black";
        }
        cell3.classList.add('taken');
        counter++;

        if (cell1Txt.innerHTML == 'X' && cell2Txt.innerHTML == 'X' && cell3Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell2.style.backgroundColor = "green";
            cell3.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell4Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell6Txt.innerHTML == 'X'){
            cell4.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell7Txt.innerHTML == 'X' && cell8Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell7.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'X' && cell4Txt.innerHTML == 'X' && cell7Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell4.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell2Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell8Txt.innerHTML == 'X'){
            cell2.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'X' && cell6Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell3.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell7Txt.innerHTML == 'X'){
            cell3.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell2Txt.innerHTML == 'O' && cell3Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell2.style.backgroundColor = "green";
            cell3.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell4Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell6Txt.innerHTML == 'O'){
            cell4.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell7Txt.innerHTML == 'O' && cell8Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell7.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell4Txt.innerHTML == 'O' && cell7Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell4.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell2Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell8Txt.innerHTML == 'O'){
            cell2.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'O' && cell6Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell3.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell7Txt.innerHTML == 'O'){
            cell3.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1.classList.contains('taken') && cell2.classList.contains('taken') && cell3.classList.contains('taken') && cell4.classList.contains('taken') && cell5.classList.contains('taken') && cell6.classList.contains('taken') && cell7.classList.contains('taken') && cell8.classList.contains('taken') && cell9.classList.contains('taken')){
            cell1.style.backgroundColor = "red";
            cell2.style.backgroundColor = "red";
            cell3.style.backgroundColor = "red";
            cell4.style.backgroundColor = "red";
            cell5.style.backgroundColor = "red";
            cell6.style.backgroundColor = "red";
            cell7.style.backgroundColor = "red";
            cell8.style.backgroundColor = "red";
            cell9.style.backgroundColor = "red";

            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
    }
});

cell4.addEventListener("click", function(){
    if (!cell4.classList.contains('taken')) {
        if (counter % 2 == 0) {
            cell4Txt.innerHTML = 'X';
            cell4Txt.style.color = "black";
        } else {
            cell4Txt.innerHTML = 'O';
            cell4Txt.style.color = "black";
        }
        cell4.classList.add('taken');
        counter++;

        if (cell1Txt.innerHTML == 'X' && cell2Txt.innerHTML == 'X' && cell3Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell2.style.backgroundColor = "green";
            cell3.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell4Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell6Txt.innerHTML == 'X'){
            cell4.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell7Txt.innerHTML == 'X' && cell8Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell7.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'X' && cell4Txt.innerHTML == 'X' && cell7Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell4.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell2Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell8Txt.innerHTML == 'X'){
            cell2.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'X' && cell6Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell3.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell7Txt.innerHTML == 'X'){
            cell3.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell2Txt.innerHTML == 'O' && cell3Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell2.style.backgroundColor = "green";
            cell3.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell4Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell6Txt.innerHTML == 'O'){
            cell4.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell7Txt.innerHTML == 'O' && cell8Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell7.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell4Txt.innerHTML == 'O' && cell7Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell4.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell2Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell8Txt.innerHTML == 'O'){
            cell2.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'O' && cell6Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell3.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell7Txt.innerHTML == 'O'){
            cell3.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1.classList.contains('taken') && cell2.classList.contains('taken') && cell3.classList.contains('taken') && cell4.classList.contains('taken') && cell5.classList.contains('taken') && cell6.classList.contains('taken') && cell7.classList.contains('taken') && cell8.classList.contains('taken') && cell9.classList.contains('taken')){
            cell1.style.backgroundColor = "red";
            cell2.style.backgroundColor = "red";
            cell3.style.backgroundColor = "red";
            cell4.style.backgroundColor = "red";
            cell5.style.backgroundColor = "red";
            cell6.style.backgroundColor = "red";
            cell7.style.backgroundColor = "red";
            cell8.style.backgroundColor = "red";
            cell9.style.backgroundColor = "red";

            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
    }
});

cell5.addEventListener("click", function(){
    if (!cell5.classList.contains('taken')) {
        if (counter % 2 == 0) {
            cell5Txt.innerHTML = 'X';
            cell5Txt.style.color = "black";
        } else {
            cell5Txt.innerHTML = 'O';
            cell5Txt.style.color = "black";
        }
        cell5.classList.add('taken');
        counter++;

        if (cell1Txt.innerHTML == 'X' && cell2Txt.innerHTML == 'X' && cell3Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell2.style.backgroundColor = "green";
            cell3.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell4Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell6Txt.innerHTML == 'X'){
            cell4.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell7Txt.innerHTML == 'X' && cell8Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell7.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'X' && cell4Txt.innerHTML == 'X' && cell7Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell4.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell2Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell8Txt.innerHTML == 'X'){
            cell2.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'X' && cell6Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell3.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell7Txt.innerHTML == 'X'){
            cell3.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell2Txt.innerHTML == 'O' && cell3Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell2.style.backgroundColor = "green";
            cell3.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell4Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell6Txt.innerHTML == 'O'){
            cell4.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell7Txt.innerHTML == 'O' && cell8Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell7.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell4Txt.innerHTML == 'O' && cell7Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell4.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell2Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell8Txt.innerHTML == 'O'){
            cell2.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'O' && cell6Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell3.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell7Txt.innerHTML == 'O'){
            cell3.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1.classList.contains('taken') && cell2.classList.contains('taken') && cell3.classList.contains('taken') && cell4.classList.contains('taken') && cell5.classList.contains('taken') && cell6.classList.contains('taken') && cell7.classList.contains('taken') && cell8.classList.contains('taken') && cell9.classList.contains('taken')){
            cell1.style.backgroundColor = "red";
            cell2.style.backgroundColor = "red";
            cell3.style.backgroundColor = "red";
            cell4.style.backgroundColor = "red";
            cell5.style.backgroundColor = "red";
            cell6.style.backgroundColor = "red";
            cell7.style.backgroundColor = "red";
            cell8.style.backgroundColor = "red";
            cell9.style.backgroundColor = "red";

            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
    }
});

cell6.addEventListener("click", function(){
    if (!cell6.classList.contains('taken')) {
        if (counter % 2 == 0) {
            cell6Txt.innerHTML = 'X';
            cell6Txt.style.color = "black";
        } else {
            cell6Txt.innerHTML = 'O';
            cell6Txt.style.color = "black";
        }
        cell6.classList.add('taken');
        counter++;

        if (cell1Txt.innerHTML == 'X' && cell2Txt.innerHTML == 'X' && cell3Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell2.style.backgroundColor = "green";
            cell3.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell4Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell6Txt.innerHTML == 'X'){
            cell4.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell7Txt.innerHTML == 'X' && cell8Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell7.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'X' && cell4Txt.innerHTML == 'X' && cell7Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell4.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell2Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell8Txt.innerHTML == 'X'){
            cell2.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'X' && cell6Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell3.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell7Txt.innerHTML == 'X'){
            cell3.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell2Txt.innerHTML == 'O' && cell3Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell2.style.backgroundColor = "green";
            cell3.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell4Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell6Txt.innerHTML == 'O'){
            cell4.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell7Txt.innerHTML == 'O' && cell8Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell7.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell4Txt.innerHTML == 'O' && cell7Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell4.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell2Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell8Txt.innerHTML == 'O'){
            cell2.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'O' && cell6Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell3.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell7Txt.innerHTML == 'O'){
            cell3.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1.classList.contains('taken') && cell2.classList.contains('taken') && cell3.classList.contains('taken') && cell4.classList.contains('taken') && cell5.classList.contains('taken') && cell6.classList.contains('taken') && cell7.classList.contains('taken') && cell8.classList.contains('taken') && cell9.classList.contains('taken')){
            cell1.style.backgroundColor = "red";
            cell2.style.backgroundColor = "red";
            cell3.style.backgroundColor = "red";
            cell4.style.backgroundColor = "red";
            cell5.style.backgroundColor = "red";
            cell6.style.backgroundColor = "red";
            cell7.style.backgroundColor = "red";
            cell8.style.backgroundColor = "red";
            cell9.style.backgroundColor = "red";

            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
    }
});

cell7.addEventListener("click", function(){
    if (!cell7.classList.contains('taken')) {
        if (counter % 2 == 0) {
            cell7Txt.innerHTML = 'X';
            cell7Txt.style.color = "black";
        } else {
            cell7Txt.innerHTML = 'O';
            cell7Txt.style.color = "black";
        }
        cell7.classList.add('taken');
        counter++;

        if (cell1Txt.innerHTML == 'X' && cell2Txt.innerHTML == 'X' && cell3Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell2.style.backgroundColor = "green";
            cell3.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell4Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell6Txt.innerHTML == 'X'){
            cell4.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell7Txt.innerHTML == 'X' && cell8Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell7.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'X' && cell4Txt.innerHTML == 'X' && cell7Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell4.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell2Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell8Txt.innerHTML == 'X'){
            cell2.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'X' && cell6Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell3.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell7Txt.innerHTML == 'X'){
            cell3.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell2Txt.innerHTML == 'O' && cell3Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell2.style.backgroundColor = "green";
            cell3.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell4Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell6Txt.innerHTML == 'O'){
            cell4.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell7Txt.innerHTML == 'O' && cell8Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell7.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell4Txt.innerHTML == 'O' && cell7Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell4.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell2Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell8Txt.innerHTML == 'O'){
            cell2.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'O' && cell6Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell3.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell7Txt.innerHTML == 'O'){
            cell3.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1.classList.contains('taken') && cell2.classList.contains('taken') && cell3.classList.contains('taken') && cell4.classList.contains('taken') && cell5.classList.contains('taken') && cell6.classList.contains('taken') && cell7.classList.contains('taken') && cell8.classList.contains('taken') && cell9.classList.contains('taken')){
            cell1.style.backgroundColor = "red";
            cell2.style.backgroundColor = "red";
            cell3.style.backgroundColor = "red";
            cell4.style.backgroundColor = "red";
            cell5.style.backgroundColor = "red";
            cell6.style.backgroundColor = "red";
            cell7.style.backgroundColor = "red";
            cell8.style.backgroundColor = "red";
            cell9.style.backgroundColor = "red";

            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
    }
});

cell8.addEventListener("click", function(){
    if (!cell8.classList.contains('taken')) {
        if (counter % 2 == 0) {
            cell8Txt.innerHTML = 'X';
            cell8Txt.style.color = "black";
        } else {
            cell8Txt.innerHTML = 'O';
            cell8Txt.style.color = "black";
        }
        cell8.classList.add('taken');
        counter++;

        if (cell1Txt.innerHTML == 'X' && cell2Txt.innerHTML == 'X' && cell3Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell2.style.backgroundColor = "green";
            cell3.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell4Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell6Txt.innerHTML == 'X'){
            cell4.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell7Txt.innerHTML == 'X' && cell8Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell7.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'X' && cell4Txt.innerHTML == 'X' && cell7Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell4.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell2Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell8Txt.innerHTML == 'X'){
            cell2.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'X' && cell6Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell3.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell7Txt.innerHTML == 'X'){
            cell3.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell2Txt.innerHTML == 'O' && cell3Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell2.style.backgroundColor = "green";
            cell3.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell4Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell6Txt.innerHTML == 'O'){
            cell4.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell7Txt.innerHTML == 'O' && cell8Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell7.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell4Txt.innerHTML == 'O' && cell7Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell4.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell2Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell8Txt.innerHTML == 'O'){
            cell2.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'O' && cell6Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell3.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell7Txt.innerHTML == 'O'){
            cell3.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1.classList.contains('taken') && cell2.classList.contains('taken') && cell3.classList.contains('taken') && cell4.classList.contains('taken') && cell5.classList.contains('taken') && cell6.classList.contains('taken') && cell7.classList.contains('taken') && cell8.classList.contains('taken') && cell9.classList.contains('taken')){
            cell1.style.backgroundColor = "red";
            cell2.style.backgroundColor = "red";
            cell3.style.backgroundColor = "red";
            cell4.style.backgroundColor = "red";
            cell5.style.backgroundColor = "red";
            cell6.style.backgroundColor = "red";
            cell7.style.backgroundColor = "red";
            cell8.style.backgroundColor = "red";
            cell9.style.backgroundColor = "red";

            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
    }
});

cell9.addEventListener("click", function(){
    if (!cell9.classList.contains('taken')) {
        if (counter % 2 == 0) {
            cell9Txt.innerHTML = 'X';
            cell9Txt.style.color = "black";
        } else {
            cell9Txt.innerHTML = 'O';
            cell9Txt.style.color = "black";
        }
        cell9.classList.add('taken');
        counter++;

        if (cell1Txt.innerHTML == 'X' && cell2Txt.innerHTML == 'X' && cell3Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell2.style.backgroundColor = "green";
            cell3.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell4Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell6Txt.innerHTML == 'X'){
            cell4.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell7Txt.innerHTML == 'X' && cell8Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell7.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'X' && cell4Txt.innerHTML == 'X' && cell7Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell4.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell2Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell8Txt.innerHTML == 'X'){
            cell2.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'X' && cell6Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell3.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell9Txt.innerHTML == 'X'){
            cell1.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'X' && cell5Txt.innerHTML == 'X' && cell7Txt.innerHTML == 'X'){
            cell3.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell2Txt.innerHTML == 'O' && cell3Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell2.style.backgroundColor = "green";
            cell3.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell4Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell6Txt.innerHTML == 'O'){
            cell4.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell7Txt.innerHTML == 'O' && cell8Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell7.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell4Txt.innerHTML == 'O' && cell7Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell4.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell2Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell8Txt.innerHTML == 'O'){
            cell2.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell8.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'O' && cell6Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell3.style.backgroundColor = "green";
            cell6.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell9Txt.innerHTML == 'O'){
            cell1.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell9.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell3Txt.innerHTML == 'O' && cell5Txt.innerHTML == 'O' && cell7Txt.innerHTML == 'O'){
            cell3.style.backgroundColor = "green";
            cell5.style.backgroundColor = "green";
            cell7.style.backgroundColor = "green";
            
            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
        else if (cell1.classList.contains('taken') && cell2.classList.contains('taken') && cell3.classList.contains('taken') && cell4.classList.contains('taken') && cell5.classList.contains('taken') && cell6.classList.contains('taken') && cell7.classList.contains('taken') && cell8.classList.contains('taken') && cell9.classList.contains('taken')){
            cell1.style.backgroundColor = "red";
            cell2.style.backgroundColor = "red";
            cell3.style.backgroundColor = "red";
            cell4.style.backgroundColor = "red";
            cell5.style.backgroundColor = "red";
            cell6.style.backgroundColor = "red";
            cell7.style.backgroundColor = "red";
            cell8.style.backgroundColor = "red";
            cell9.style.backgroundColor = "red";

            cell1.classList.add('taken');
            cell2.classList.add('taken');
            cell3.classList.add('taken');
            cell4.classList.add('taken');
            cell5.classList.add('taken');
            cell6.classList.add('taken');
            cell7.classList.add('taken');
            cell8.classList.add('taken');
            cell9.classList.add('taken');
        }
    }
});