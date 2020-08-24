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
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    MatChipsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RestaurantModule { }
