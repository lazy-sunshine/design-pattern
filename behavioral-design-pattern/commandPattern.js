
class MathMethods {

    constructor(num){
        this.num = num;
    }

    square(){
        return Math.pow(this.num ,2);
    }

    cube() {
        return Math.pow(this.num ,3);
    }

}


class Calculator {

    
    constructor(client){
        this.client = client;
        this.command = [];
    }

    execute(cmd){
        this.command.push(cmd);
        return this.client[cmd]();
    }
}

//let y = new Calculator(new MathMethods(5));
// x.execute('square');
// x.execute('cube');