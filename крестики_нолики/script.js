// window.onload = function () {
//     for (let i=0;i<9;i++){
//         document.getElementById('game').innerHTML += '<div  class="block"></div>';
//     }
// };

// let s = '123456';
// let m = '24';
//
// console.log();





let acc='';
let win = ['123','456','789','147','258','369','159','357'];


let hod = 0;

document.getElementById('game').onclick = function (event) {
        //console.log(event.target.className);
        for(let i=0; i<=9;i++){
            if (event.target.className ==='block cell'+i){

                acc ='';
                if (hod % 2 === 0){

                    event.target.innerHTML = 'x';


                    ifFun('x','Крестики');
                    innerHtml('ход: Нолики');

                } else {

                    event.target.innerHTML = '0';

                    ifFun('0','Нолики');

                    innerHtml('ход: Крестики');
                }
                hod++;
            }
        }
};

function innerHtml(str) {
    return document.getElementsByClassName('stroke')[0].innerHTML = str;
}

function ifFun(str,name) {

    let block = document.getElementsByClassName('block');

    for(let i=0 ; i<8;i++){

        let one = 'cell'+win[i].substr(0,1);
        let block = document.getElementsByClassName(one);

        let two = 'cell'+win[i].substr(1,1);
        let block2 = document.getElementsByClassName(two);

        let three = 'cell'+win[i].substr(2,1);
        let block3 = document.getElementsByClassName(three);


        if(block[0].innerHTML==str && block2[0].innerHTML ==str && block3[0].innerHTML ==str){
            alert('winner '+name);
           return innerHtml('Игра закончена');
        }

    }
}

function winFun(str,name) {
    for (let i =0; i<win.length;i++){

    }
}











