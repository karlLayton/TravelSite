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

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'services',
    component: ServicesComponent,
    data: { title: 'Services' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About Travel Site' }
  },
  {
    path: 'faq',
    component: FaqComponent,
    data: { title: 'Frequently Asked Questions' }
  },
  {
    path: 'contact',
    component: ContactDetailComponent,
    data: { title: 'Contact Us' }
  },
  {
    path: 'route-form',
    component: RouteFormComponent,
    data: { title: 'Route Form' }
  },
  {
    path: 'landing-page',
    component: LandingPageComponent,
  },
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
  })
export class AppRoutingModule {}




















