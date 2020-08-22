import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { SharedModule } from '../shared/shared.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';


@NgModule({
  declarations: [RestaurantComponent, MenuDialogComponent],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    SharedModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatChipsModule
  ]
})
export class RestaurantModule { }
