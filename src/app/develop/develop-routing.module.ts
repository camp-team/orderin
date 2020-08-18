import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopComponent } from './develop/develop.component';


const routes: Routes = [
  {
    path: '',
    component: DevelopComponent
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('../shell/shell.module').then((m) => m.ShellModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopRoutingModule { }
