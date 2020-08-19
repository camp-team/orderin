import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRestaurantsRoutingModule } from './add-restaurants-routing.module';
import { AddRestaurantsComponent } from './add-restaurants/add-restaurants.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ImageCropperModule } from 'ngx-image-cropper';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';

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
    MaterialFileInputModule,
    ImageCropperModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule
  ]
})
export class AddRestaurantsModule { }
