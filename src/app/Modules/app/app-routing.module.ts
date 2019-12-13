import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverLetterComponent } from 'src/app/Modules/cover-letter/cover-letter.component';
import { InfoComponent } from 'src/app/Modules/info/info.component';


const routes: Routes = [
  { path: "", component: InfoComponent },
  { path: "coverLetter", component: CoverLetterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
