import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantsComponent } from './add-restaurants/add-restaurants.component';


const routes: Routes = [
  {
    path: '',
    component: AddRestaurantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRestaurantsRoutingModule { }
