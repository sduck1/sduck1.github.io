function User(name) {
    this.sayHi =function(){
        alert('hi ' + name);
    }
}

let user1 = new User('kol9');
user1.sayHi();