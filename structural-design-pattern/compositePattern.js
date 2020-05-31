class Document{

    constructor(name){
        this.name = name;
        this.watermark = false;
    }

    setWaterMark(isWaterMark){
        this.watermark  = isWaterMark;
    }
}

class DocumentComposite {

    constructor(name){
        this.collection =[];
        if(name){
            this.collection.push(new Document(name));
        }
    }

    add(name){
        this.collection.push(name);
    }

    setWaterMark(isWaterMark){

        this.collection.map(doc => {
            doc.setWaterMark(isWaterMark);
        })
    }
}

const forms = new DocumentComposite()
const pr2Form = new Document(
  'Primary Treating Physicians Progress Report (PR2)',
)
const w2Form = new DocumentComposite('Internal Revenue Service Tax Form (W2)');
forms.add(pr2Form);
forms.add(w2Form);

forms.setWaterMark('Namaste');

console.log(forms);