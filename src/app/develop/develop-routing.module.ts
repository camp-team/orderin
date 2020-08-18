import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopComponent } from './develop/develop.component';


const routes: Routes = [
  {
    path: '',
    component: DevelopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopRoutingModule { }
