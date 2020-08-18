import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRestaurantsRoutingModule } from './add-restaurants-routing.module';
import { AddRestaurantsComponent } from './add-restaurants/add-restaurants.component';


@NgModule({
  declarations: [AddRestaurantsComponent],
  imports: [
    CommonModule,
    AddRestaurantsRoutingModule
  ]
})
export class AddRestaurantsModule { }
