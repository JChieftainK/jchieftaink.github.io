import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {
  finance = this.fb.group({
    applyTo: [''],
    date: [{value: new Date(), disabled: true}],
    description: [''],
    dollarAmount: [''],
    category: ['']
  });
  selectValue: string;
  items = [
    {value: 'housebill', viewValue: 'House Bill'}
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
}
