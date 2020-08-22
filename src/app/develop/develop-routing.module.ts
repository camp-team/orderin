import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopComponent } from './develop/develop.component';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { AddRestaurantsModule } from './add-restaurants/add-restaurants.module';
import { DevelopGuard } from '../guards/develop.guard';

const routes: Routes = [
  {
    path: '',
    component: DevelopComponent,
    canActivate: [DevelopGuard],
    canLoad: [DevelopGuard],
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
      },
      {
        path: 'restaurant',
        loadChildren: () => import('./restaurant-detail/restaurant-detail.module').then((m) => m.RestaurantDetailModule)
      },
      {
        path: 'add-menu',
        loadChildren: () => import('./add-menu/add-menu.module').then((m) => m.AddMenuModule)
      },
      {
        path: 'developers',
        loadChildren: () => import('./developers/developers.module').then((m) => m.DevelopersModule)
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
