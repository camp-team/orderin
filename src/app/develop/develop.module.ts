import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopRoutingModule } from './develop-routing.module';
import { DevelopComponent } from './develop/develop.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [DevelopComponent],
  imports: [
    CommonModule,
    DevelopRoutingModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class DevelopModule { }
