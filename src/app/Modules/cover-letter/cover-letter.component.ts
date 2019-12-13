import { Component, OnInit } from '@angular/core';
import { CoverLetter } from 'src/app/Models/coverLetter';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cover-letter',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.css']
})
export class CoverLetterComponent implements OnInit {

  public coverLetters: CoverLetter[] = [];
  public letterForm: FormGroup;

  public editingLetter = { id: '', profession: "", name: "", about: "", draft: false };

  constructor() {
    this.setTestLetters();
  }

  ngOnInit() {
    this.letterForm = new FormGroup({
      'id': new FormControl(this.editingLetter.id, [
        Validators.required,
        Validators.pattern("^\\d+$")
      ]),
      'profession': new FormControl(this.editingLetter.profession, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.pattern("[a-zA-Z ]+")
      ]),
      'name':new FormControl(this.editingLetter.name,[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
        Validators.pattern("[a-zA-Z ]+")
      ]),
      'about': new FormControl(this.editingLetter.about, []),
      'draft': new FormControl(this.editingLetter.draft, [])
    });
  }

  get id() { return this.letterForm.get('id'); }
  get name() { return this.letterForm.get('name'); }
  get profession() { return this.letterForm.get('profession'); }
  get about() { return this.letterForm.get('about'); }
  get draft() { return this.letterForm.get('draft'); }

  setTestLetters() {
    this.coverLetters = [
      { id: 0, profession: "engineer", name: "Charlie", about: "I'm Charlie", draft: false },
      { id: 1, profession: "programmer", name: "Gudwin", about: "I'm Gudwin", draft: true }
    ];
  }

}
