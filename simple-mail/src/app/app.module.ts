import { EmailService } from './services/email.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmailTabComponent } from './email-tab/email-tab.component';
import { EmailTabListComponent } from './email-tab-list/email-tab-list.component';
import { EmailMessageComponent } from './email-message/email-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    EmailTabComponent,
    EmailTabListComponent,
    EmailMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
