import { Component, OnInit } from '@angular/core';

import { EstimateInput } from '../interfaces/estimate-input';

@Component({
  selector: 'app-money-estimator',
  templateUrl: './money-estimator.component.html',
  styleUrls: ['./money-estimator.component.scss']
})
export class MoneyEstimatorComponent implements OnInit {
  estimationData: EstimateInput;

  constructor() { }

  ngOnInit() {
  }

  inputEstimateEmitted(value: EstimateInput) {
    this.estimationData = value;
  }
}
