import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../view/home/home.component';
import { AboutComponent } from '../view/about/about.component';
import { EventComponent } from '../view/event/event.component';
import { ServicesComponent } from '../view/services/services.component';
import { NewsComponent } from '../view/news/news.component';
import { ProjectsComponent } from '../view/projects/projects.component';
import { ContactComponent } from '../view/contact/contact.component';


const routes: Routes = [
   {path: '', component: HomeComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'events',
      component: EventComponent
    },
    {
      path: 'services',
      component: ServicesComponent
    },
    {
      path: 'news',
      component: NewsComponent
    },
    {
      path: 'projects',
      component: ProjectsComponent
    },
    {
      path: 'contacts',
      component: ContactComponent
    },
    
    

    
    
];

export const StaticRoutes = RouterModule.forChild(routes);
