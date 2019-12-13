import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverLetterComponent } from './cover-letter.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CoverLetterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ]
})
export class CoverLetterModule { }
