

const makeCounter = () =>{

    let currentCounter = 1;

    return {

        getNext : ()=>currentCounter++,
        set : (value)=>currentCounter = value,

        reset: ()=> currentCounter=0

    };

};


let count = makeCounter();








