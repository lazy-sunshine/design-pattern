
// A pseudo function that is working as a api for now

function User(){

    this.getUserInfo = (id)=>{
        
        switch(id){
            case 1: return "apple";
            case 2 : return "ball";
            case 3: return "cat";
            case 4: return "nayna";
            case 5: return "mantra";
            default : return "Unknown"
        }
    }
}

//a proxy class , will give cached info if present else will call a api saving network call
class UserProxy {

    constructor(){
        cache =[];
    }

    getUserInformation =(id)=>{
        if(cache[id]){
            return cache[id];
        }

        //get info from api
        const user =  new User();
        return user.getUserInfo(id);

    }
}