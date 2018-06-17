function User() {
    this.sayHi = function () {
        alert(this.name);
    }
}

User.createAnonimus = function () {
  let user = new User();
  user.name = "Anonim";
  return user;
};

User.cretFromData = function (userData) {
    let user = new User();
    user.name = userData.name;
    user.age = userData.age;
    return user;
};

let anonim = User.createAnonimus();


let vasya = User.cretFromData(
    {
        name:"vasya",
        age:24
    }
);


function Article() {
    this.created = new Date().getFullYear();
    Article.count++;
    Article.last = this.created;

}

Article.count =0;

Article.showStats = function () {
   return 'всего ' + this.count+' дата ' + this.last;
};

new Article();
new Article();

console.log(Article.showStats());