$(document).ready(function() {
    main.sidenave();
    main.dropdown();
    main.dropFillter();
    main.select();
    main.selectCategory();
    main.tabs();
    main.slick();
    main.dropdownButton();
    main.modal();
    main.blockClose();
    main.navRight();
    main.categoryIf();
    main.scrollpage();
    main.menuShow();
    main.bodyIf();
    blockStage();
});


    let main = {
        sidenave: function () {
            // menu mobile
            $(".button-collapse").sideNav();
        },
        dropdown:function () {
            let dropdowns = document.getElementById("myDropdown");
            document.getElementById('dropDown').onclick = function(){
                document.getElementsByClassName('your-account')[0].style.display = 'block';
            };
        },
        dropFillter:function (event) {
            if ( !$('#drop-fill') ){
                return false;
            }
            // console.log(event);

            $('#drop-fill').click(function () {
                $('.drop-f').toggle();
            });
        },
        select:function () {
            $('.select').material_select();
        },
        selectCategory:function f() {
            $('.select-category').material_select();
        },
        tabs: function () {
            $('ul.tabs').tabs();
        },
        slick:function () {
            //slick
            $('.technics__slider').slick({
                dots: false,
                arrows:true,
                draggable:true,
                infinite: false,
                slidesToScroll: 1,
                slidesToShow: 7,
                variableWidth:true,
                prevArrow: '<button class="slick-prev slick-arrow"></button>',
                nextArrow: '<button class="slick-next slick-arrow"></button>',
            });
        },
        dropdownButton:function f() {
            $('.dropdown-button').dropdown();
        },
        modal:function () {
            $('.modal').modal({
                dismissible: true, // Modal can be dismissed by clicking outside of the modal
                opacity: .3, // Opacity of modal background
                inDuration: 300, // Transition in duration
                outDuration: 400, // Transition out duration
                startingTop: '4%', // Starting top style attribute
                endingTop: '10%',
                preventScrolling:false
            });
        },
        blockClose:function () {
            $('.block-x').click(function () {
                $('.modal').modal('close');
            });
        },
        navRight:function () {
            let modal1 = document.getElementsByClassName('navbar-block-category__content')[0];
            let modal = document.getElementById('navbar-category');
            let btn = document.getElementById('btn-navbar-right');
            if(document.getElementById('btn-navbar-right')){
                document.getElementById('btn-navbar-right').onclick= function(){
                    return false;
                }
            }


            $('#btn-navbar-right').click(function (event) {
                $('#navbar-category').fadeToggle();
                event.preventDefault();
                return false;
            });


            // $('#navbar-category').click(function (event) {
            //         console.log(event.target.id );
            //     if (event.target.id !== modal ) {
            //         modal.style.display = 'none';
            //         console.log(event.target.parentNode.className);
            //        // $('#navbar-category').fadeToggle();
            //     }
            // });

            document.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };


            $('.navbar-block-category__close').click(function () {
               // modal.style.display = 'none';
                $('#navbar-category').fadeToggle();
            });
        },
        categoryIf:function () {
            document.getElementsByTagName('body')[0].onclick = function () {
                let modal = document.getElementById('navbar-category');
                //console.log(event.target);
                if(event.target == modal){
                    modal.style.display = 'none';
                }
            }
        },
        scrollpage: function () {
            let scrolled ;
            let timer;

            $('#btn-top-body').click(function () {
                scrolled= window.pageYOffset;
                scrollToTop();
            });

            function scrollToTop() {
                if(scrolled >0 ){
                    window.scrollTo(0,scrolled);
                    scrolled -= 50; //скорость прокрутки
                    timer = setTimeout(scrollToTop,50);
                }else {
                    clearTimeout(timer);
                    window.scrollTo(0,0);
                }
            }
        },
        menuShow:function () {
            document.getElementById('menu-show').onclick = function () {
                // document.getElementById('menu-mobile-block').style.display = 'block';
                $('#menu-mobile-block').toggle();
                let btn = document.getElementById('menu-show');
                document.getElementsByTagName('body')[0].onclick = function () {
                    if (event.target !== btn){
                        document.getElementById('menu-mobile-block').style.display = 'none';
                    }
                }
            };
        },
        bodyIf: function () {
            document.getElementsByTagName('body')[0].onclick = function(event) {
                //console.log(event.target.matches('.your-account'));
                // let dropdowns = document.getElementsByClassName("your-account")[0];
                // if (event.target.matches('.dr') == false) {
                //     //
                //     // console.log(1);
                //
                //     dropdowns.style.display = 'none';
                // }
                if (event.target.matches('.df') == false){
                    $('#drop-ff').hide();
                    //  document.getElementById('drop-ff').style.display = 'none';
                }
            };
            window.onclick = function(event) {
                //console.log(event.target.matches('.your-account'));
                let dropdowns = document.getElementsByClassName("your-account")[0];
                if (event.target.matches('.dr') == false) {
                    dropdowns.style.display = 'none';
                }

            };
        }
    };

    document.getElementById('search').onfocus = function () {
        $('.label-icon').hide();

    };
    document.getElementById('search').onblur= function () {
        $('.label-icon').show();
    };
    // filterLaptop();
    // function filterLaptop() {
    //     let obj =  $('.section-search .technics');
    //     if (window.matchMedia("(max-width: 1199px)").matches) {
    //         obj.remove();
    //         $('.output').html(obj);
    //         childMove();
    //     } else {
    //
    //     }
    //
    // }
    //


    function blockStage(){
        if(document.getElementsByClassName('block-stage')[0]){
            let block = document.getElementsByClassName('block-stage')[0];
            if (block.children.length === 1 ) {
                if (window.matchMedia("(max-width: 1199px) and (min-width: 569px)").matches) {
                    if(document.getElementsByClassName('block-stage__btn-next')[0]){
                        document.getElementsByClassName('block-stage__btn-next')[0].style.position = 'absolute';
                        document.getElementsByClassName('block-stage__btn-next')[0].style.right = '40px';
                        block.style.height = '128px';
                    }
                    block.style.justifyContent='start';
                    $('.block-step').css('justify-content','start');
                }
                if (window.matchMedia("(min-width: 1200px)").matches){
                    block.style.justifyContent='start';
                }
            }
            if (block.children.length === 2) {
                if (window.matchMedia("(max-width: 1199px) and (min-width: 569px)").matches) {
                    if (document.getElementsByClassName('block-stage__btn-next')[0]){
                        document.getElementsByClassName('block-stage__btn-next')[0].style.position = 'absolute';
                        document.getElementsByClassName('block-stage__btn-next')[0].style.right = '40px';
                        document.getElementsByClassName('block-stage__btn-next')[0].style.top = '120px';
                        block.style.height = '200px';
                    }
                }
            }
        }

        return false;
    }












