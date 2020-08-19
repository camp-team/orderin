import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SharedModule } from 'src/app/develop/shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [RestaurantsComponent],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    SharedModule,
    MatCheckboxModule
  ]
})
export class RestaurantsModule { }
