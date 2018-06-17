let user = {
    fname: "ivan",
    sname:"ivanot",
    lname:"petrov"
};

function showFullName(firstpart,lastpart) {
    return this[firstpart]+ ' ' + this[lastpart];
}

console.log(showFullName.call(user,'fname','sname'));
console.log(showFullName.apply(user,['fname','lname']));

let obj = {
  0:"a",
  1:"b",
  2:"c",
    length:3
};

obj.join = [].join;


function  printArgn() {
    let join = [].join;
    let arg = join.call(arguments,';');

    alert(arg);
}

printArgn(1,2,3);

function sumargs() {
    arguments.reduce = [].reduce;
    return arguments.reduce(function (a,b) {
        return a+b;
    })
}

alert(sumargs(4,5,6));

function sumArgs() {
    return [].reduce.call(arguments, function (a,b) {
        return a+b;
    });
}

alert(sumArgs(4,5,6));