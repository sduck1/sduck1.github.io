let arr = [20,4,5,9];

let a = arr.reduce(function (acc, current,index) {
    console.log('acc '+acc);
    console.log('current '+current);
    console.log('index '+index);
    return acc+current;
});

console.log(a);