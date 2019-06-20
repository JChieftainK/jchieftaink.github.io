import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';

import { FinancialRoutingModule } from './financial-routing.module';
import { ReceiptComponent } from './receipt/receipt.component';

@NgModule({
  declarations: [ReceiptComponent],
  imports: [
    CommonModule,
    FinancialRoutingModule,
    MatInputModule
  ]
})
export class FinancialModule { }
