let user = {
    name:"Василий",
    show: function () {
        return this.name;
    },
    sh:function () {
        return showName(this);
    }
};


const showName = (username) => username.name;


let username = {
    firstName : "user"
};

let admin = {
    firstName:"admin"
};

const func = () => {
    return   this.firstName ;
};

function  func2() {
    return this.firstName ;
}

username.f= func2;
admin.g = func2;



let arr = ["a", "b"];

arr.push(function() {
    alert( this );
});

arr[2]();