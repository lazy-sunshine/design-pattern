

class Flat {

    constructor(size, address) {
        this.size=size;
        this.address=address;
    }

    getCost =() => {
        return 997;   //default value
    }

}


//decorator 1
function addFurnitures(flat){

    flat.furnished = true;
    const v = flat.getCost();

    flat.getCost = () => {
        return parseInt(v) +1000;
    }
}

//decorator 2
function addBalcony(flat){
    flat.hasBalcony = true;
    const v = flat.getCost();
    flat.getCost = () => {
        return parseInt(v) +1000;
    }
}


const flat = new Flat('800sq ft', "gurgaon");

console.log(flat.getCost());
addFurnitures(flat);
console.log(flat);
console.log(flat.getCost());