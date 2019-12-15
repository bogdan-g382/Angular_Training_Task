import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'src/app/Modules/app/app-routing.module';
import { AppComponent } from 'src/app/Modules/app/app.component';
import { InfoModule } from 'src/app/Modules/info/info.module';
import { CoverLetterModule } from 'src/app/Modules/cover-letter/cover-letter.module';
import { CoverLetterService } from 'src/app/services/CoverLetter/cover-letter.service';
import { ToastrService } from 'src/app/services/Toastr/toastr.service';

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
  providers: [CoverLetterService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
