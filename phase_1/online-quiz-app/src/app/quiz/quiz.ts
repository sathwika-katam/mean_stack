export class Quiz {
    id:number;
    question:string;
    a:string;
    b:string;
    c:string;
    d:string;
    answer:string;
    selected:string;

    constructor(){
        this.id = -1;
        this.question = "";
        this.a = "";
        this.b = "";
        this.c = "";
        this.d = "";
        this.answer = "";
        this.selected = "";
    }
}
