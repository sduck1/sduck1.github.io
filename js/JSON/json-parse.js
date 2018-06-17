let numbers = "[1,2,3,4]";

numbers = JSON.parse(numbers);

// дата в строке - в формате UTC
let str = '{"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}';

let event =JSON.parse(str,function (key, value) {
    if(key =="date") return new Date(value);
    return value;
});

alert(event.date.getDate());