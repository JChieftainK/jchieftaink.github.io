import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiptComponent } from './receipt/receipt.component';

const routes: Routes = [
  {
    path: '',
    component: ReceiptComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialRoutingModule { }
