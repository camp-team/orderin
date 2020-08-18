import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopComponent } from './develop/develop.component';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { AddRestaurantsModule } from './add-restaurants/add-restaurants.module';


const routes: Routes = [
  {
    path: '',
    component: DevelopComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'restaurants'
      },
      {
        path: 'restaurants',
        loadChildren: () => import('./restaurants/restaurants.module').then((m) => RestaurantsModule)
      },
      {
        path: 'add',
        loadChildren: () => import('./add-restaurants/add-restaurants.module').then((m) => AddRestaurantsModule)
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('../shell/shell.module').then((m) => m.ShellModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopRoutingModule { }
