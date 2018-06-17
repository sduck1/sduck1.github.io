// (function () {
//     let mes ='hi';
//     alert(mes);
// })();


const filter = (arr, func) =>{

    let result = [];

    for (let i=0; i<arr.length; i++){
        let value = arr[i];
        if(func(value)){
            result.push(value);
        }
    }

    return result;

};

const inBetween = (a,b) => (x) => x>=a && x<=b;

let mas = [1,2,3,4,5,6,7];



// alert( filter(mas,inBetween(2,4)));

// alert(filter(mas, function (a) {
//     return a===2;
// } ));