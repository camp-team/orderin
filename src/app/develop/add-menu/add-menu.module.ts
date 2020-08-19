import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMenuRoutingModule } from './add-menu-routing.module';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [AddMenuComponent],
  imports: [
    CommonModule,
    AddMenuRoutingModule,
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
export class AddMenuModule { }
