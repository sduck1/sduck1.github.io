jQuery(function($){
    $("#phone").mask("+7(999) 999-9999");
});




function toggle() {

    var ele = document.getElementById("toggleText");

    var text = document.getElementById("displayText");

    if(ele.style.display == "block") {

        ele.style.display = "none";

        text.innerHTML = "Раскрыть полную форму <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>";

    }
    else {

        ele.style.display = "block";

        text.innerHTML = "Скрыть полную форму<i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i>";
    }

}


