import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'davecar-profile';
  preLoader: boolean;


  ngOnInit() {
  }

  onActivate(event: any) {
    this.preLoader = true;
    console.log(this.preLoader);
    setTimeout(() => {
      this.preLoader = false;
    }, 1000);
  }

}
