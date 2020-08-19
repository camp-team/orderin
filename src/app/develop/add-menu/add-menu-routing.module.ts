import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';


const routes: Routes = [
  {
    path: '',
    component: AddMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMenuRoutingModule { }
