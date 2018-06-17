function work(a) {
    alert( a ); // work - произвольная функция
}

function makeLogging(f, log) {
    /* ваш код */
    function wrapper(a) {
        log.push(a);
        return f.call(this,a);
    }

    return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
    alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}