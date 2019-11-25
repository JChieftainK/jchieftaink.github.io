import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoneyEstimatorComponent } from './money-estimator/money-estimator.component';

const routes: Routes = [
  {
    path: '',
    component: MoneyEstimatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialRoutingModule { }
