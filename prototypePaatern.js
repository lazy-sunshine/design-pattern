1.// By using Object.create.Object.create creates an object which has a specified prototype and optionally contains specified properties as wel


const car ={

    name: "Maruti",

    drive: function () {
        console.log( "Weeee. I'm driving!" );
      },
     
      panic: function () {
        console.log( "Wait. How do you stop this thing?" );
      }    
};

const options = {
    "id": {
    value: '11',
    enumerable: true
  },
 
  "model": {
    value: "Ford",
    enumerable: true
  }
 }
const yourCar = Object.create(car, options);


