import { NgModule } from '@angular/core';
import { MailComponent } from './mail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MailComponent,
  },
];

@NgModule({
  declarations: [MailComponent],
  imports: [RouterModule.forChild(routes)],
})
export class MailModule {}
