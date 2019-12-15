import { Component, OnInit } from '@angular/core';
import { CoverLetter } from 'src/app/Models/coverLetter';
import { ActivatedRoute, Router } from '@angular/router';
import { CoverLetterService } from 'src/app/services/CoverLetter/cover-letter.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfessionMaxLength } from 'src/app/Constants/CoverLetter/Profession/professionMaxLength';
import { NameMinLength } from 'src/app/Constants/CoverLetter/Name/nameMinLength';
import { NameMaxLength } from 'src/app/Constants/CoverLetter/Name/nameMaxLength';
import { ProfessionMinLength } from 'src/app/Constants/CoverLetter/Profession/nameMinLength';
import { AboutMinLength } from 'src/app/Constants/CoverLetter/About/aboutMinLength';
import { AboutMaxLength } from 'src/app/Constants/CoverLetter/About/aboutMaxLength';

declare let toastr: any;

@Component({
  selector: 'app-edit-cover-letter',
  templateUrl: './edit-cover-letter.component.html',
  styleUrls: ['./edit-cover-letter.component.css']
})
export class EditCoverLetterComponent implements OnInit {

  public oldLetter = new CoverLetter();
  public oldLetterId = 0;
  private editingForm: FormGroup;

  public nameMinLength = NameMinLength;
  public nameMaxLength = NameMaxLength;
  public professionMinLength = ProfessionMinLength;
  public professionMaxLength = ProfessionMaxLength;
  public aboutMinLength = AboutMinLength;
  public aboutMaxLength = AboutMaxLength;


  constructor(private route: ActivatedRoute, private coverLetterService: CoverLetterService, private router: Router) { }

  ngOnInit() {
    this.initFormGroup();

    this.route.params.subscribe(params => {
      let oldLetterId = params['id'];
      this.oldLetterId = oldLetterId;
      this.coverLetterService.openDatabase().then(fullfilled => {
        let request = this.coverLetterService.getLetterById(oldLetterId);

        request.onsuccess = () => {
          this.oldLetter = request.result;
          this.editingForm.setValue(
            {
              id: this.oldLetter.id,
              profession: this.oldLetter.profession,
              name: this.oldLetter.name,
              about: this.oldLetter.about,
              draft: this.oldLetter.draft
            });
        }

        request.onerror = () => {
          toastr.error("Index db error. " + request.error.message);
        }

      }, rejected => {
        toastr.error("Index db error. " + rejected.error.message);
      });
    });
  }


  private initFormGroup() {
    this.editingForm = new FormGroup({
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

  get id() { return this.editingForm.get('id'); }
  get profession() { return this.editingForm.get('profession'); }
  get name() { return this.editingForm.get('name'); }
  get about() { return this.editingForm.get('about'); }
  get draft() { return this.editingForm.get('draft'); }


  public saveEdited(letter: CoverLetter) {
    if (letter.id === this.oldLetterId) {
      let request = this.coverLetterService.updateLetter(letter);

      request.onsuccess = () => {
        this.cancelBack();
      }

      request.onerror = () => {
        toastr.error("Index db error. " + request.error.message);
      }
    }

    else {
      let request = this.coverLetterService.deleteLetterById(this.oldLetterId);
      request.onsuccess = () => {
        request = this.coverLetterService.addLetter(letter);
        request.onsuccess = () => {
          this.cancelBack();
        }

        request.onerror = () => {
          toastr.error("Index db error. " + request.error.message);
        }
      }
      request.onerror = () => {
        toastr.error("Index db error. " + request.error.message);
      }
    }
  }

  public cancelBack() {
    this.router.navigate(['/createShowCoverLetter']);
  }

}
