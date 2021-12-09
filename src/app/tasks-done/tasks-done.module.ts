import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksDonePageRoutingModule } from './tasks-done-routing.module';

import { TasksDonePage } from './tasks-done.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksDonePageRoutingModule
  ],
  declarations: [TasksDonePage]
})
export class TasksDonePageModule {}
