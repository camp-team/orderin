import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddMenuGuard } from 'src/app/guards/add-menu.guard';


const routes: Routes = [
  {
    path: '',
    component: AddMenuComponent,
    canDeactivate: [AddMenuGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMenuRoutingModule { }
