import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataPlayerComponent } from './data-player.component';



@NgModule({
  declarations: [DataPlayerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DataPlayerComponent
  ]
})
export class DataPlayerModule { }
