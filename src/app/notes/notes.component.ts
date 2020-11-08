import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note.model';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  private id = 0;
  constructor(public noteSerivce: NoteService) { }
  public notes: Note[] = [];
  ngOnInit(): void {
    this.getNotes();
  }

  private getNotes(){
    let notes = this.noteSerivce.getNotes();
    if(notes == null){
      this.noteSerivce.saveNotes(notes);
    }else{
      this.notes = this.noteSerivce.getNotes();
      this.id = this.notes[this.notes.length-1].id;
    }
  }

  public addNote(){

    this.id++;
    let note = new Note(this.id, "", new Date().toLocaleDateString());
    this.notes.push(note);
    this.noteSerivce.saveNotes(this.notes);
  }

  public removeNote(noteId:number){
    this.notes = this.notes.filter(x=>x.id != noteId);
    this.noteSerivce.saveNotes(this.notes);
  }

  public addText(event: Note){
    this.notes.map(x=>x.id == event.id);
    this.noteSerivce.saveNotes(this.notes);
  }
}
