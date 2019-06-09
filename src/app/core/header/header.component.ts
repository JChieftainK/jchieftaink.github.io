import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navs = [
    {
      label: 'Home',
      value: '/'
    },
    {
      label: 'UI Playground',
      value: '/ui-playground'
    },
    {
      label: 'Financial',
      value: '/financial'
    }
  ];

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  onNavClick(value) {
    this.router.navigate([value]);
  }
}
