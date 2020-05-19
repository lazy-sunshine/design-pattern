// caching suppose there is cofee machine which if have already created a 
//type of cofee we provide taht or we else we provide a new one.

class coffee {

    constructor(type){
        this.type = type;
    }

}

class coffeeFactory {

    constructor(){
        this.coffeeCollection =[];
    }

    createCoffee(type){
        let coffee = this.getCoffee(type);
        if(coffee){
            return coffee;
        }

        const newCoffe = new coffee(type);
        this.coffeeCollection.push(newCoffe);
        return newCoffe;
    }

    getCoffee(type){
        return this.coffeeCollection.find(item=> item.type= type)
    }

}