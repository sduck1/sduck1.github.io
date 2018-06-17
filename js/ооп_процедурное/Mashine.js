
 function Mushine(power) {
    this._power = power;
    this._enabled = false;
    let self = this;

    this.enable =function(){
        self._enabled = true;
    };

    this.disable = ()=>{
        _enabled = false;
    };
}

// ///////////////////////////////////////////////////
  function CoffeMashine(power) {

      Mushine.apply(this,arguments);

      let parentEnable = this.enable;
      this.enable = function () {
          parentEnable();
          this.run();
      }


  }

  let coffe = new CoffeMashine(10000,400);


