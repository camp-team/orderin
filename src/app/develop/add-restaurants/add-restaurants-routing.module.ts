import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantsComponent } from './add-restaurants/add-restaurants.component';
import { AddRestaurantGuard } from 'src/app/guards/add-restaurant.guard';


const routes: Routes = [
  {
    path: '',
    component: AddRestaurantsComponent,
    canDeactivate: [AddRestaurantGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRestaurantsRoutingModule { }
