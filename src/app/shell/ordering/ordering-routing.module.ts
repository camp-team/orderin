import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderingComponent } from './ordering/ordering.component';


const routes: Routes = [
  {
    path: '',
    component: OrderingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderingRoutingModule { }
