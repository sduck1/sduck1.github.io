const printNumbersInterval = ()=>{
        let i = 1;
        let timerId = setInterval(function () {
            console.log(i);
            if(i==20) clearInterval(timerId);
            i++;
        },300);
};

const printNumbersTime =()=>{
    let i=1;
    let timerId = setTimeout(function tick() {
        console.log(i);
        if(i<20) setTimeout(tick,200);
        i++;
    },200)

};

printNumbersTime();