function Animal(  species, animalName, food ) {
  this.species= species;
  this.animalName= animalName;
  this.food = food;
  this.eat = function () {
    return this.animalName+ " eats" + this.food ;
  };
} 
// We can create new instances of the animal
const lion = new Animal('Felidae', 'lion', 'meet');

// Es2015  using class 
class Animal{
constructor(species, animalName, food ){
this._species= species;
  this._animalName= animalName;
  this._food = food;
  this.eat = function () {
    return this.animalName+ " eats" + this.food ;
  };

}
}
var rabbit = new Animal('Leporidae','rabbit', 'grass');
