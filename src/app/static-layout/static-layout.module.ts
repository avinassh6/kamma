import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticLayoutComponent } from './static-layout.component';
import { StaticRoutes } from './static-layout-routing.module';
import { HomeComponent } from '../view/home/home.component';
import { PostsComponent } from '../posts/posts.component';
import { PosteventsComponent } from '../postevents/postevents.component';
import { AboutComponent } from '../view/about/about.component';
import { EventComponent } from '../view/event/event.component';
import { ServicesComponent } from '../view/services/services.component';
import { NewsComponent } from '../view/news/news.component';
import { ProjectsComponent } from '../view/projects/projects.component';
import { ContactComponent } from '../view/contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    StaticRoutes
  ],
  declarations:
   [StaticLayoutComponent, 
    HomeComponent,
    PostsComponent,
    PosteventsComponent,
    AboutComponent,
    EventComponent,
    ServicesComponent,
    NewsComponent,
    ProjectsComponent,
    ContactComponent
    ]
})
export class StaticLayoutModule { }
