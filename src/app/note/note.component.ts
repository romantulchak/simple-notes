import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../model/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: Note;
  @Output() removed = new EventEmitter<boolean>();
  @Output() addText = new EventEmitter<Note>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.note);

  }

  public removeNote(){
    this.removed.emit(true);
  }
  public saveNoteText(){
      this.addText.emit(this.note);
  }
}
