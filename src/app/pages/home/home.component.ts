import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  coffeeLiquid = true;

  constructor() { }

  ngOnInit() {
  }

  fillLiquid() {
    this.coffeeLiquid = false;
  }

  drainLiquid() {
    this.coffeeLiquid = true;
  }

}
