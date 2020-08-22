import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MenuCardComponent } from './menu-card/menu-card.component';


@NgModule({
  declarations: [RestaurantCardComponent, MenuCardComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    RestaurantCardComponent,
    MenuCardComponent
  ]
})
export class SharedModule { }
