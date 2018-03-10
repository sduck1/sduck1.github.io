window.addEventListener("load", function () {

    AOS.init({
        once: true,
        offset: 0
    });

});

function showTime(id) {
    let modal = document.getElementById('myModal');
    let btn = document.getElementById(id);
    let span = document.getElementsByClassName('close2')[0];


    modal.style.display = 'block';

    span.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if(event.target == modal) {
            modal.style.display = 'none';
        }
    }
}


// function showTime2(id) {
//     let modal = document.getElementById('myModal2');
//     let btn = document.getElementById(id);
//     let span = document.getElementsByClassName('close2')[0];
//
//
//     modal.style.display = 'block';
//
//     span.onclick = function () {
//         modal.style.display = 'none';
//     };
//
//     window.onclick = function (event) {
//         if(event.target == modal) {
//             modal.style.display = 'none';
//         }
//     }
// }

function showTime3(id) {
    let modal = document.getElementById('myModal3');
    let btn = document.getElementById(id);
    let span = document.getElementsByClassName('close3')[0];


    modal.style.display = 'block';

    span.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if(event.target == modal) {
            modal.style.display = 'none';
        }
    }
}