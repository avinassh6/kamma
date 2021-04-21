import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StaticComponent } from './static/static.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: '',
       component: StaticComponent,
       loadChildren: () => import('./static-layout/static-layout.module').then(m => m.StaticLayoutModule)
         },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


