import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  btnClose = false;
  windowWidth: number;


  constructor() { }

  ngOnInit() {
    this.windowWidth = window.innerWidth;
    this.onChangeWindowSize(this.windowWidth);
    // console.log('onInit' + this.windowWidth);
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
    this.windowWidth = event.target.innerWidth;
    this.onChangeWindowSize(this.windowWidth);
    // console.log('onResize' + this.windowWidth);
  }

  onBtnClose() {
    if (this.windowWidth < 1200) {
      this.btnClose = this.btnClose ? false : true ;
    }
  }

  onChangeWindowSize(size) {
    if (this.windowWidth > 1200) {
      this.btnClose = true;
    } else {
      this.btnClose = false;
    }
  }

}
