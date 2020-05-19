
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





