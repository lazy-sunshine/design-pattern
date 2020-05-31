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
                        value : this.collection[this.index++]
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

// var z  = [1,2,3,4,5]
// var k = new IteratorClass(z);

// for(let p of k){
//          window.alert(p);
// }


function *iteratorUsingGenerator(collection) {
    let index =0;

    while(index< collection.length){
        yield collection[index++];
    }
}

// const g = iteratorUsingGenerator(['1','2','3','4']);
// g.next();
