import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToolbarComponent],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
exports:[ToolbarComponent]
})
export class ToolbarModule { }