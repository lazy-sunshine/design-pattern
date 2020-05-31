class ChatRoom {

    constructor(){
        this.users =[];
    }

    registerParticipant =(participant) =>{
        this.users.push(participant);
        participant.chatRoom = this;
    }

    displayAllUsers = () =>  {
        console.log(this.users);
    }

    sendMessage(fromUser, id, msg){

       const {name} = fromUser;
       console.log(this.users);
       const recievingUser =  this.users.filter(item => item.id == id);
       console.log(recievingUser);
       if(recievingUser.length >0){
            recievingUser[0].recieveMessage(name, msg);
       }
    }

}

class Participant {

    constructor(id,name){
        this.name = name;
        this.id = id;
        this.chatRoom = null;
    }

    sendMessage(idToSend, msg){

        this.chatRoom.sendMessage(this, idToSend, msg)
    }

    recieveMessage(from, msg){
        console.log(`Message from ${from} is : ${msg}`);
    }
}

/** const kirti = new Participant("kirti", "kirti");
const sanjay = new Participant("Sanjay", "Sanjay");
const harsh = new Participant("Harsh", "Harsh");
const suru = new Participant("Suru", "Suru");

const chatroom = new ChatRoom();
chatroom.registerParticipant(kirti);
chatroom.registerParticipant(sanjay);
chatroom.registerParticipant(harsh);
chatroom.registerParticipant(suru);

kirti.sendMessage("Sanjay", "let learn javascript");

**/
