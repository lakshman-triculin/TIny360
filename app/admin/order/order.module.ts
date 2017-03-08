import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MultiSelectModule } from '../../shared/components/multiselect/multiselect';
import { DialogModule} from '../../shared/components/dialog/dialog';

@NgModule({
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,MultiSelectModule,DialogModule
  ],
  declarations: [OrderComponent,]
})
export class OrderModule { }