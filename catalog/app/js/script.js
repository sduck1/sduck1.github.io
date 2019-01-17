var current = 0,
    $preview = $( '#preview' ),
    $carouselEl = $( '#carousel' ),
    $carouselItems = $carouselEl.children(),
    carousel = $carouselEl.elastislide( {
        current : current,
        minItems : 4,
        onClick : function( el, pos, evt ) {

            changeImage( el, pos );
            evt.preventDefault();

        },
        onReady : function() {

            changeImage( $carouselItems.eq( current ), current );

        }
    } );

function changeImage( el, pos ) {

    $preview.attr( 'src', el.data( 'preview' ) );
    $carouselItems.removeClass( 'current-img' );
    el.addClass( 'current-img' );
    carousel.setCurrent( pos );

}

$(document).ready(function () {
    document.getElementsByClassName('block_hover')[0].onmouseover  = function () {
        document.getElementById('textInfo').style.display ='block';
        console.log(1);
    };

    document.getElementsByClassName('block_hover')[0].onmouseout = function () {
        document.getElementById('textInfo').style.display ='';
        console.log(1);
    };

    $('.tabs').tabs();
});

