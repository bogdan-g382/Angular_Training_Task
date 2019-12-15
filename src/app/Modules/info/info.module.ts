import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class InfoModule { }
