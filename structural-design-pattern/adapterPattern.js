class UserApi {

    getUserInfo=  (userId) => {
        //a pseudo function that symbolises getting info from db
    const userInfo = (function(){return {name: 'Mantra', address: 'Gurgaon', occupation: 'SDE'}}());
        
        return [
            {name: userInfo.name},
            {addr: userInfo.address},
            {occ: userInfo.occupation}
        ]
       
    }
}


//New Class

class Users {

    getUsername =  (id) => {   
    // a pseudoFunctio
    const userName = (function(){return {name: 'Mantra'}}());

    return userName;
    }

    getUserAddr =  (id) => {   
        // a pseudoFunction
        const userAddr = (function(){return {address: 'Gurgaon'}}());
    
        return {addr: userAddr.address};
    }

    getUserOccupation =  (id) => {   
        // a pseudoFunction
        const userOcc = (function(){return {occupation: 'SDE'}}());
    
        return {occ: userOcc.occupation};
    }
       
}

//adapter class 
class UserAdapter {

    constructor(){
        this.user = new Users();
    }

    getUserInfo = (id) => {
        const userName = this.user.getUsername(id);
        const userAddr = this.user.getUserAddr(id);
        const userOcc = this.user.getUserOccupation(id);

        return [
            userName,
            userAddr,
            userOcc
        ]
    }

}


const oldUser = new UserApi();
const userInfo = oldUser.getUserInfo();

const newUser = new UserAdapter();
const newUserInfo = newUser.getUserInfo();