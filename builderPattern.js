// // Builder Design Pattern, which is a pattern used to help construct complex objects. It helps separate
// // object construction from its representation which will help us reuse this to create different representations.
// // here we instantiate a object with basic parameter and all the code for its other pattern and added subsequemtly.
// // the builder pattern is generally needed most when we need a way to help simplify constructions of complex objects, 
// // so the best time to introduce this into your code is when you're hitting that point or when they are becoming large.
// It lays out the following steps:

//1. The base class contains the business logic

// 2. It also receives the object that was created and proceeds to set the values
// Separate the code that is responsible for creating objects into builders--which ultimately are also just objects/classes.

// All of these builders will be responsible for defining the steps to construct the complex objects.
// Can use an optional class which is called the Director
// Directors are involved in defining methods ensuring that steps are executed in a specific order to build the commonly constructed objects.

class Animal{
    constructor(type,species,name,wild,food) {
        this.type = type;
        this.species = species;
        this.name = name;
        this.wild = wild ;
        this.food = food ;
        
      }
    
      eat(target) {
        console.log(`Eating target: ${target.name}`)
      }
} 



class AnimalBuilder{

     constructor(species, type){
         this.species = species;
         this.type =type;
     }

     setName(name){
        this.name = name;
        return this;
     }

     isWild(wild){
         this.wild = wild;
         return this;
     }
     eats(food){
         this.food = food;
         return this;
     }

     build(){
        if(!this.name){
            throw new Error('Name is missing'); 
        }

        return new Animal(this.type, this.species, this.name,this.wild,this.food);
     }


 }


 //so now without the builder class we will previously call, here the issue is as the parameter increases its complexity
 //increases as we have to always do a two and fro while instantiating the source code plus there could be easily mistakes

 const rabbit = new Animal('rabbit', 'land', 'momo', null,'herbivore');


 // with builder patterm

 const lion = new AnimalBuilder('lion', 'land')
                .setName('lion').isWild( true).eats('carnivore').build();


//The builder pattern might seem similar to the abstract factory pattern but one difference is that the builder pattern creates 
//an object step by step whereas the abstract factory pattern returns the object in one go.




