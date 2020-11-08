import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class NoteService{
  constructor(){}

  public saveNotes(notes: any){
    localStorage.setItem('notes', JSON.stringify(notes));
  }
  public getNotes(){
    return JSON.parse(localStorage.getItem('notes'));
  }
}
