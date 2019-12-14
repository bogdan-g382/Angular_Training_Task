import { Component, OnInit } from '@angular/core';
import { CoverLetter } from 'src/app/Models/coverLetter';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NameMinLength } from 'src/app/Constants/CoverLetter/Name/nameMinLength';
import { NameMaxLength } from 'src/app/Constants/CoverLetter/Name/nameMaxLength';
import { ProfessionMinLength } from 'src/app/Constants/CoverLetter/Profession/nameMinLength';
import { ProfessionMaxLength } from 'src/app/Constants/CoverLetter/Profession/professionMaxLength';
import { AboutMaxLength } from 'src/app/Constants/CoverLetter/About/aboutMaxLength';
import { AboutMinLength } from 'src/app/Constants/CoverLetter/About/aboutMinLength';
import { CoverLetterService } from 'src/app/services/CoverLetter/cover-letter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'create-show-cover-letter',
  templateUrl: './create-show-cover-letter.component.html',
  styleUrls: ['./create-show-cover-letter.component.css']
})
export class CreateShowCoverLetterComponent implements OnInit {

  public nameMinLength = NameMinLength;
  public nameMaxLength = NameMaxLength;
  public professionMinLength = ProfessionMinLength;
  public professionMaxLength = ProfessionMaxLength;
  public aboutMinLength = AboutMinLength;
  public aboutMaxLength = AboutMaxLength;

  public coverLetters: CoverLetter[] = [];
  public letterForm: FormGroup;

  constructor(private coverLetterService: CoverLetterService, private router: Router) {
    this.coverLetterService.openDatabase().then(fullfilled => {
      this.loadLetters();
    }, rejected => {
      alert("Index db error. " + rejected.error.message);
    });
  }

  ngOnInit() {
    this.initFormGroup();
  }

  get id() { return this.letterForm.get('id'); }
  get name() { return this.letterForm.get('name'); }
  get profession() { return this.letterForm.get('profession'); }
  get about() { return this.letterForm.get('about'); }
  get draft() { return this.letterForm.get('draft'); }


  private initFormGroup() {
    this.letterForm = new FormGroup({
      'id': new FormControl('', [
        Validators.required,
        Validators.max(Number.MAX_SAFE_INTEGER),
        Validators.pattern("^\\d+$")
      ]),
      'profession': new FormControl('', [
        Validators.required,
        Validators.minLength(this.professionMinLength),
        Validators.maxLength(this.professionMaxLength),
        Validators.pattern("[-a-zA-Z\. ]+")
      ]),
      'name': new FormControl('', [
        Validators.required,
        Validators.minLength(this.nameMinLength),
        Validators.maxLength(this.nameMaxLength),
        Validators.pattern("[-a-zA-Z ]+")
      ]),
      'about': new FormControl('', [
        Validators.minLength(this.aboutMinLength),
        Validators.maxLength(this.aboutMaxLength)
      ]),
      'draft': new FormControl(true, [])
    });
  }

  createLetter(newLetter: CoverLetter) {
    let request = this.coverLetterService.addLetter(newLetter);
    request.onsuccess = () => {
      this.coverLetters.push(newLetter);
      this.letterForm.setValue({
        'id': '',
        'profession': '',
        'name': '',
        'about': '',
        'draft': true
      });
    }

    request.onerror = () => {
      alert("Index db error. " + request.error.message);
    }
  }

  deleteLetterById(letterId: number) {
    let request = this.coverLetterService.deleteLetterById(letterId);

    request.onsuccess = () => {
      let index = this.coverLetters.findIndex((letter) => {
        return letter.id == letterId;
      });
      if (index === -1) {
        return;
      }

      this.coverLetters.splice(index, 1);
    }

    request.onerror = () => {
      alert("Index db error. " + request.error.message);
    }
  }

  editLetter(editingLetterId: number) {
    this.router.navigate(['/editCoverLetter', editingLetterId]);
  }

  public loadLetters() {
    let request = this.coverLetterService.getAllLetters();

    request.onsuccess = () => {
      this.coverLetters = request.result;
    }

    request.onerror = () => {
      alert("Index db error. " + request.error.message);
    }
  }

}
