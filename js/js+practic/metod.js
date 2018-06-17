const Counter2 = () => {

    let currentCounter = 1;

    const counter = ()=>{
        return currentCounter++;
    };

    counter.set = (value) => currentCounter=value;
    counter.reset = () => currentCounter=0;

    return counter();

};

let count2 = Counter2();






function makeCounter2() {
    var currentCount = 1;

    // возвращаемся к функции
    function counter() {
        return currentCount++;
    }

    // ...и добавляем ей методы!
    counter.set = function(value) {
        currentCount = value;
    };

    counter.reset = function() {
        currentCount = 1;
    };

    return counter;
}

var counter = makeCounter2();

alert( counter() ); // 1
alert( counter() ); // 2

counter.set(5);
alert( counter() ); // 5