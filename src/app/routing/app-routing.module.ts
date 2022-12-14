import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING_NAMES } from './routing-names.const';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ROUTING_NAMES.mail,
        loadChildren: () => import('src/app/modules/mail/mail.module').then((m) => m.MailModule),
      },
      {
        path: ROUTING_NAMES.message,
        loadChildren: () => import('src/app/modules/message/message.module').then((m) => m.MessageModule),
      },
      { path: '', redirectTo: ROUTING_NAMES.mail, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
