import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailMessageComponent } from './email-message/email-message.component';
import { EmailTabListComponent } from './email-tab-list/email-tab-list.component';


const routes: Routes = [ {
  path: 'emailMessage',
  component: EmailMessageComponent,
},
{
  path: 'listEmail',
  component: EmailTabListComponent,

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
