function loadValueText(id,styleProperty) {
    let block =document.getElementById(id);
    let text = document.getElementById('text');
    let range =document.getElementById('range').value;



    console.log( styleProperty );
    let s = styleProperty;
    text.value = range;

        block.style[s]= range +'px';

}
