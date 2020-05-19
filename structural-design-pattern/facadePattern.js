

class Library {

    //lending books from library
    lendBook =  (genre, bookName, author, studentId) => {
        
        const aLibrarian = new autoLibrarianFacade();
        const isSuccess = aLibrarian.extractBook(genre, bookName, author, studentId);
        const {book, msg} = isSuccess;
        book ? console.log('Thats ur book') : console.log(msg);
        
    }
}


class autoLibrarianFacade {

    constructor(){
        //supposedly there is a mongoDb connections that  contain inventory for library
        //const mongo = new Database('mongo');
         //for right now we are making pseudo function as mongo
         this.mongo ={
             isBookAvailable : (genre,bookName, author) => new Promise(resolve => {
                setTimeout(() => {
                  resolve('5 seconds');
                }, 50000);
              }),
             addBookToStudentCard : (studentId) => new Promise(resolve => {
                setTimeout(() => {
                  resolve('5 seconds');
                }, 50000);
              })
         };
    }

    extractBook(genre, bookName, author, studentId){
            const isSuccess  = this.isStudentEligible(studentId);
            if(!isSuccess){
                return {book:false, msg: 'Student not eligible , please contact the admin for same.'}
            }
            //a pseudo function which will be connecting to our db
            const isBookAvailable = this.mongo.isBookAvailable(genre,bookName, author);

            if( isBookAvailable) {

                //adding the book to student card 

                this.mongo.addBookToStudentCard(studentId);
                    
                return {book:true, msg:true} 
            }
            else return { book:false, msg: 'book not available'};

    }

    isStudentEligible( studentId) {
        //function will get student data from db to check if there are overstanding fine on student or 
        //whether this student is elligible for getting books from this library
        
        return true;
    }


}
