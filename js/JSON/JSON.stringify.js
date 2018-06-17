let event = {
    title: "Конференция",
    date: "сегодня"
};

let  str = JSON.stringify(event);
// alert( str ); // {"title":"Конференция","date":"сегодня"}

let room = {
    number: 23,
    occupy: function() {
        alert( this.number );
    }
};

let event2 = {
    title: "Конференция",
    date: new Date(Date.UTC(2014, 0, 1)),
    room: room
};
// alert( JSON.stringify(event2) );


let user = {
    name: "Вася",
    age: 25,
    window: window
};

// alert( JSON.stringify(user, ["name", "age"]));

let sttr = JSON.stringify(user, function (key,value) {
   if(key === 'window') return undefined;

   return value;
});

alert(sttr);