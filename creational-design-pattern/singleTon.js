class Logger {
    constructor(name = "") {
        if (!!Logger.instance) {
            return Logger.instance;
        }

        Logger.instance = this;

        this.name = name;

        this.createLoggerId =  "id_" + Math.random();
        
        return this;
    }

    log(val) {
        console.log(val);
    }
}


