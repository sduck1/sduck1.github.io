var menu = document.querySelector(".main-nav");
var menu_open = document.querySelector(".hamburger-wrapper");
var hamb =  document.querySelector(".hamburger-wrapper span");

menu_open.addEventListener("click", function() {
  if(menu.classList.contains("main-nav--opened")) {
    menu.classList.remove("main-nav--opened");
    hamb.classList.remove("menu-closer");
    hamb.classList.add("hamburger");
  } else {
    menu.classList.add("main-nav--opened");
    hamb.classList.remove("hamburger");
    hamb.classList.add("menu-closer");
  }
});

var Circle = function(sel){
    var circles = document.querySelectorAll(sel);
    [].forEach.call(circles,function(el){
        var valEl = parseFloat(el.innerHTML);
        valEl = valEl*408/100;
        el.innerHTML = '<svg width="160" height="160"><circle transform="rotate(-90)" r="65" cx="-80" cy="80" /><circle transform="rotate(-90)" style="stroke-dasharray:'+valEl+'px 408px;" r="65" cx="-80" cy="80" /></svg>';

    });
};
Circle('.circle');


var modal = document.getElementById('myModal');

var lnk = document.getElementById("myLnk");

var span = document.getElementsByClassName("close")[0];

lnk.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};