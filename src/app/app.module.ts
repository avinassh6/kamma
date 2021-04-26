import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { AppRoutingModule } from './app.routing.module';
import { StaticComponent } from './static/static.component';
import { NavBarComponent } from './static-layout/nav-bar/nav-bar.component';
import { FooterComponent } from './view/footer/footer.component';
import { RouterModule } from '@angular/router';
import {  LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [				
    AppComponent,
      MarqueeComponent,
      StaticComponent,
      NavBarComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule 
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
