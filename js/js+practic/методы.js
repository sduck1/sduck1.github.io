function  Journal(date) {
    this.date = date;

    this.formatDate = function (date) {
        return date.getDate()+ (date.getMonth()+1)+'.'+date.getFullYear();
    };

    this.getTitle = function () {
        return  "Выпуск от"+' '+this.formatDate(this.date);
    }

}



Journal.compare = function (journalA , journalB) {
    return journalA.date - journalB.date;
};

let journals = [
    new Journal(new Date(2012, 1, 1)),
    new Journal(new Date(2012, 0, 1)),
    new Journal(new Date(2011, 11, 1))
];


function findMin(journals) {
    let min = 0;
    for(let i = 0; i<journals.length; i++){
        if( Journal.compare(journals[min],journals[i]) > 0){
            min = i;
        }
    }
    return journals[min];

}


//alert( findMin(journals).getTitle() );

function User(userDate) {
    if (userDate){
        this.name = userDate.name;
    }
    else {
        this.name = "Аноним"
    }

    this.showName = function () {
        alert(this.name);
    }
}

let guest = new User();

guest.showName();

let ivan = new User({
    name:"Ivan"
});
ivan.showName();


































