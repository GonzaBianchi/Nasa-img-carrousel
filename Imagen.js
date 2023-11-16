
export class Imagen{
    constructor(data){
        this.url = data[0].url;
        this.title = data[0].title;
        this.explanation = data[0].explanation;
    }
}