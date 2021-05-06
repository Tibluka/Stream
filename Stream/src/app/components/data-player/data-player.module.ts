import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataPlayerComponent } from './data-player.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DataPlayerComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DataPlayerComponent
  ]
})
export class DataPlayerModule { }
