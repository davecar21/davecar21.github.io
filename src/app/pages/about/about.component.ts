import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  dateCurrent = (new Date()).getFullYear();
  dateNow = this.dateCurrent - 2015;
  constructor() { }

  ngOnInit() {
  }

}
