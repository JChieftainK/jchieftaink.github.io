import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialRoutingModule } from './financial-routing.module';
import { ReceiptComponent } from './receipt/receipt.component';

@NgModule({
  declarations: [ReceiptComponent],
  imports: [
    CommonModule,
    FinancialRoutingModule
  ]
})
export class FinancialModule { }
