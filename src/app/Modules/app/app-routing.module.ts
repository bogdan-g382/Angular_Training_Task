import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateShowCoverLetterComponent } from 'src/app/Modules/cover-letter/create-show/create-show-cover-letter.component';
import { InfoComponent } from 'src/app/Modules/info/info.component';
import { EditCoverLetterComponent } from 'src/app/Modules/cover-letter/edit/edit-cover-letter.component';


const routes: Routes = [
  { path: "", component: InfoComponent },
  { path: "createShowCoverLetter", component: CreateShowCoverLetterComponent },
  { path: "editCoverLetter/:id", component: EditCoverLetterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
