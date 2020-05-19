class Iterator {

    constructor(collection){
        this.collection = collection;
        this.index =0;
    }

    [Symbol.iterator]() {
        
        return {
            next : () =>{

                if(this.index < this.collection.length){
                    return {
                        done:false,
                        value : this.collection[index++]
                    }
                }
                else{
                    this.index =0;
                    return {
                        done :true
                    }
                }
            }
        }
    } 
}


function *iteratorUsingGenerator(collection) {
    let index =0;

    while(index< collection.length){
        yield collection[index++];
    }
}