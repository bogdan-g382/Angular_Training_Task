import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateShowCoverLetterComponent } from 'src/app/Modules/cover-letter/create-show/create-show-cover-letter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EditCoverLetterComponent } from 'src/app/Modules/cover-letter/edit/edit-cover-letter.component';



@NgModule({
  declarations: [CreateShowCoverLetterComponent, EditCoverLetterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CoverLetterModule { }
