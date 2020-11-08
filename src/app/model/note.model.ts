export class Note{
  id:number;
  text:string;
  date: string;
  constructor(id: number, text: string, date: string){
    this.id = id;
    this.text = text;
    this.date = date;
  }
}
