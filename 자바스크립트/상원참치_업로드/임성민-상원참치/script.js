// 1번 문제
var menu = document.querySelectorAll('.menu');

function menu(){
    var event = document.getElementsByClassName(click);
    if(event.target.classList[1] == 'click'){
        event.target.classList.remove('click');
    }else{
        for(var i=0; i<menu.length; i++){
            menu[i].classList.remove('click');
        }
    }
}

function int(){
    for(var i=0; i<menu.length; i++){
        menu.addEventListener('click', menu);
    }
}

//2번문제 

var sum =0;

function select(){
    var total = document.querySelector('#totalMoney');
    var eig = document.querySelector('#fattyTuna8');
    var sec = document.querySelector('#fattyTuna2');
    var thr = document.querySelector('#bestPartOfRed3');
    var fif = document.querySelector('#fattyTuna5');
    

    if(eig == fattyTuna8){
        total += 22,000;
    }
    if(sec == fattyTuna2){
        total += 10,000;
    }
    if(thr == bestPartOfRed3){
        total += 12,000;
    }
    if(fif == fattyTuna){
        total += 16,000;
    }    
    return 0;
}

//3번 문제
function special(){
    var spe = document.querySelector('#specialSet').value;
    alert('죄송합니다. 참다랑어 세트는 품절입니다.');
}

//4번 문제
function order(){
    var order = document.querySelector('#order').value;
    alert('주문완료');
    
    order.value = null;
}