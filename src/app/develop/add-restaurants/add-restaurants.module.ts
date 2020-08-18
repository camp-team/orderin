import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRestaurantsRoutingModule } from './add-restaurants-routing.module';
import { AddRestaurantsComponent } from './add-restaurants/add-restaurants.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AddRestaurantsComponent],
  imports: [
    CommonModule,
    AddRestaurantsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ]
})
export class AddRestaurantsModule { }
