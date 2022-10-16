import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
const appRoute: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'HOME', component: IndexComponent
  },
  {
    path: 'CONTACT', component: ContactComponent
  },
  {
    path: 'SERVICES', component: ServicesComponent
  },
  {
    path: 'ABOUT', component: AboutComponent
  },

]
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
