
function bind(func, context) {
    return function() {
        return func.apply(context, arguments);
    };
}

let user = {
   name: "ivan",
   saHay: function (who="peter") {
       alert(this.name +' hi ' + who) ;
   }
};

// setTimeout(function () {
//     user.saHay('Peter')
// }, 1000);



// setTimeout(user.saHay.bind(user),1000);


function mul(a,b) {
    return a * b;
}

let double = mul.bind(null,2);

console.log(double(4));