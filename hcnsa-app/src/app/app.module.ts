import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './landing/landing.component';
import { EmailBannerComponent } from './email-banner/email-banner.component';
import { AboutComponent } from './about/about.component';
import { InitiativesComponent } from './initiatives/initiatives.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { BoardComponent } from './board/board.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { GalaComponent } from './gala/gala.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    LandingComponent,
    EmailBannerComponent,
    AboutComponent,
    InitiativesComponent,
    SocialMediaComponent,
    BoardComponent,
    SponsorsComponent,
    GalaComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
