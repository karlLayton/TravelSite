import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderDetailComponent } from './header/header-detail.component';
import { ServicesComponent } from './services/services.component';
import { LandingPageComponent } from './LandingPage/landing-page.component';
import { FooterDetailComponent } from './footer/footer-detail.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './FAQ/faq.component';
import { RouteFormComponent } from './routeForm/route-form.component';
import { ContactDetailComponent } from './contact/contact-detail.component';
import { NotFoundComponent } from './NotFound/not-found.component';


import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderDetailComponent,
    ServicesComponent,
    FooterDetailComponent,
    RouteFormComponent,
    AboutComponent,
    FaqComponent,
    LandingPageComponent,
    ContactDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
  AppComponent
  ]
})
export class AppModule { }
