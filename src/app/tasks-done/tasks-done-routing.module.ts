import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksDonePage } from './tasks-done.page';

const routes: Routes = [
  {
    path: '',
    component: TasksDonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksDonePageRoutingModule {}
