import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {
  applyToUser: string;
  date = new FormControl(new Date());
  selectValue: string;
  items = [
    {value: 'housebill', viewValue: 'House Bill'}
  ];
  constructor() { }

  ngOnInit() {
  }
}
