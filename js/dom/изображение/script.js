let modal = document.getElementById('myModal');
let img = document.getElementById('myImg');

let modalImg = document.getElementById('img01');
let captiomText = document.getElementById('caption');

img.onclick = function(){
    modal.style.display = 'block';
    modalImg.src = this.src;
    captiomText.innerHTML = this.alt;
};

let span = document.getElementsByClassName('close')[0];
span.onclick = function () {
   modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal){
        modal.style.display ="none";
    }
};