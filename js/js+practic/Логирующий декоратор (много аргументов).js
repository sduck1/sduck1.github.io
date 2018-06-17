function work(a, b) {
    alert( a + b ); // work - произвольная функция
}

function makeLogging(f, log) {
    /* ваш код */
    function wrapper(a) {
        log.push([].slice.call(arguments));
        return f.apply(this,arguments);
    }

    return wrapper;
}


let log = [];
work = makeLogging(work, log);




work(1, 2); // 3
work(4, 5); // 9



for (let i = 0; i < log.length; i++) {
    let args = log[i]; // массив из аргументов i-го вызова
    alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}