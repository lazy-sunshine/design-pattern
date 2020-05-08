class VehicleFactory{

    constructor(){

        this.createVehicle = function(configs){

            let vehicle;
            const {type} = configs;

            switch(type){

                case "Car" : 
                    vehicle = new Car(configs);
                    break;
                
                case "Truck": 
                    vehicle =  new Truck(configs);
                    break;

                default :
                    return null;
            }

            vehicle.genericInformation = () => {
                console.log("heavy vehicle");
            }

            return vehicle;
        }

    }
}

class Car {
    
    constructor(options){
          // some defaults
        this.type = "Car";
        this.doors = options.doors || 4;
        this.state = options.state || "brand new";
        this.color = options.color || "silver";
    }

    carForMe = (option) => {

        const {coPassenger,  safetyLevel, sunRoof} = options;

        if(coPassenger >=2 && safetyLevel <=5 && sunRoof) return "You need a fast and furious car";

        else 
            return "You are in for a cutesy small car. :) "
    }
  
   
  }

class Truck {

    constructor(options){
        this.type="Truck";
        this.state = options.state || "used";
        this.wheelSize = options.wheelSize || "large";
        this.color = options.color || "blue";
    }
}