import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'davecar-profile';
  preLoaderStatus: boolean;
  toggleBlog: boolean;

  constructor(private location: Location) {

  }


  ngOnInit() {
  }

  onActivate(event: any) {
    this.preLoaderStatus = true;
    setTimeout(() => {
      this.preLoaderStatus = false;
    }, 2500);
    if (this.location.path() === '/blog') {
      this.toggleBlog = true;
    } else {
      this.toggleBlog = false;
    }
  }

}
