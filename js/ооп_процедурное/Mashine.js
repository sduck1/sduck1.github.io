
 function Mushine(power) {
    this._power = power;
    this._enabled = false;
    let self = this;

    this.enable =function(){
      return  self._enabled = true;
    };

    this.disable = ()=>{
     return   self._enabled = false;
    };
}

// ///////////////////////////////////////////////////

 function CoffeMashine(power, capacity) {

     Mushine.apply(this,arguments);

     let parentEnable = this.enable;
     let parentDisable = this.disable;

     this.enable = function () {
         parentEnable();
     };

     this.disable = ()=>{
         parentDisable();
         clearTimeout(timerId);
     };

     let waterAmount = 0;
     let WATER_HEAT_CAPACITY = 4200;
     let timerId ;
     function getTimeToBoil() {
         return WATER_HEAT_CAPACITY*waterAmount*80/power;
     }

     function onReady() {
         alert('кофе готов');
     }

     this.setOnReady = (newReady)=>{
         onReady=newReady;
     };

     this.setWaterAmount = function (amount) {
         if (amount < 0) {
             throw new Error("Значение должно быть положительным");
         }
         if (amount > capacity) {
             throw new Error("Нельзя залить больше, чем " + capacity);
         }

         waterAmount = amount;
     };

     this.addWater = function (v) {
         this.setWaterAmount(waterAmount+v);
     };

     this.getWaterAmount = function () {
         return waterAmount;
     };

     this.run = function () {
         if (!this._enabled ){
             throw new Error("необходимо включить кофеварку!");
         }
         timerId = setTimeout(function () {
             timerId = null;
             onReady();
         },getTimeToBoil());
     };

     this.getPower = function () {
         alert(power);
     };

     this.isRunning = function () {
         return !!timerId;
     }

 }

  let coffe = new CoffeMashine(100000,400);
coffe.disable();
 coffe.enable();

console.log(coffe._enabled);
    coffe.run();

