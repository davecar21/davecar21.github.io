import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'davecar-profile';
  preLoaderStatus: boolean;

  ngOnInit() {
  }

  onActivate(event: any) {
    this.preLoaderStatus = true;
    setTimeout(() => {
      this.preLoaderStatus = false;
    }, 2500);
  }

}
