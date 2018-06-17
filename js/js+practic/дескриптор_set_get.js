let user = {};


Object.defineProperty(user, "name", {
    value:'kiri',
    configurable: false,
    writable: false
});

let user2 = {
    ferstName:"vas",
    lastName:"ivanov",
    get fullname() {
        return this.ferstName + ' ' + this.lastName;
    },

    set fullname(value){
        let split = value.split(" ");
        this.ferstName = split[0];
        this.lastName = split[1];
    }
};


let user3 = {
    fname: 'vasya',
    lname:'petrov'
};

Object.defineProperty(user3,"fullname",{
    get: function () {
        return this.fname+' '+this.lname;
    },
    set: function (value) {
        let split = value.split(" ");
        this.fname = split[0];
        this.lname = split[1];
    }
});

user3.fullname = "ivan ivanov";


function User6(name,birthday){
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this , "age", {
        get: function(){
            let todayYear =  new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });

}

let pete = new User6('Peter', new Date(1986,1,2));


let Users = {
    a:1,
    b:3,
    itter:3
};

Object.defineProperty(Users,"itter",{
   enumerable:false
});

Object.defineProperties(Users,{
    fname: {
        value:"ivan"
    },
    lname: {
        value:"ivanov",
    },
    fullnamme: {
        get: function () {
            return this.fname + ' ' + this.lname;
        }
    }
});

let obj = {
  test:5
};

let descriptor = Object.getOwnPropertyDescriptor(obj,"test");

delete descriptor.value;
delete descriptor.writable;

descriptor.get = function () {
  console.log("prived");
};

delete obj.test;

Object.defineProperty(obj,'test',descriptor);

console.log(obj.test);








































