import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { FinancialRoutingModule } from './financial-routing.module';
import { EstimatorInputComponent } from './estimator-input/estimator-input.component';
import { MoneyEstimatorComponent } from './money-estimator/money-estimator.component';
import { EstimatorDataTableComponent } from './estimator-data-table/estimator-data-table.component';

@NgModule({
  declarations: [EstimatorInputComponent, MoneyEstimatorComponent, EstimatorDataTableComponent],
  imports: [
    CommonModule,
    FinancialRoutingModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    ReactiveFormsModule
  ]
})
export class FinancialModule { }
