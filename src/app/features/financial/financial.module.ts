import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { FinancialRoutingModule } from './financial-routing.module';
import { ReceiptComponent } from './receipt/receipt.component';

@NgModule({
  declarations: [ReceiptComponent],
  imports: [
    CommonModule,
    FinancialRoutingModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule
  ]
})
export class FinancialModule { }
