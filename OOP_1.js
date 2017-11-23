function Phone(brand, color, memory, price) {
  this.brand = brand;
  this.color = color;
  this.price = price;
  this.memory = memory;
     };  
};
Phone.prototype.printInfo = function() {
 console.log("The phone brand is " + this.brand + " the color is " + this.color + " memory in GB is " + this.memory + " and the price is " + this.price);
    
var SamsungGalaxyS8 = new Phone ("Samsung",'black',64, 2400),
    iPhone6s = new Phone("Apple", 'gold',32, 1700),
    OnePlusOne = new Phone('OnePlus', 'black','-no data-',1300);  

SamsungGalaxyS8.printInfo();
iPhone6s.printInfo();
OnePlusOne.printInfo();
