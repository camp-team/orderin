import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantDetailRoutingModule } from './restaurant-detail-routing.module';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from 'src/app/develop/shared/shared.module';


@NgModule({
  declarations: [RestaurantDetailComponent],
  imports: [
    CommonModule,
    RestaurantDetailRoutingModule,
    SharedModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class RestaurantDetailModule { }
