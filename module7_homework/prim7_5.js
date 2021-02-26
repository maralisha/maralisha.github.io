/* Задание 5
Переписать консольное приложение из предыдущего юнита на классы. */

class ElectrAppliance{
    constructor(name){
    this.name = name
}

switchOnOf(OnOff){
    if(OnOff === true){
        console.log("Прибор включен");
    }else console.log("Прибор выключен");
}

countPower(power) {
    console.log(`Потребляемая мощность ${power} ватт`)
}
}

class TableLamp extends ElectrAppliance {
    constructor(name, color){
    super();
    this.color = color;
  }
}

class SewingMachines extends ElectrAppliance {
    constructor(name, model, color){
    super(),
    this.model = model,
    this.color = color
   }

   getPrice(price){
   console.log(`Стоимость ${price} тенге`);
  }
}

const overlock = new SewingMachines("Overlock","Janome","white");
const NightLight = new TableLamp("IKEA","white");

overlock.countPower(220);
NightLight.switchOnOf(true);
overlock.getPrice(200000);
