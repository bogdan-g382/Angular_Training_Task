import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'src/app/Modules/app/app-routing.module';
import { AppComponent } from 'src/app/Modules/app/app.component';
import { InfoModule } from 'src/app/Modules/info/info.module';
import { CoverLetterModule } from '../cover-letter/cover-letter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoverLetterModule,
    InfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
