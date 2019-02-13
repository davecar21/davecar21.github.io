import { Component, OnInit, HostListener, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() toggleThemeEmitter: EventEmitter<string> = new EventEmitter<string>();

  btnClose = false;
  windowWidth: number;
  toggleTheme = 'dark';

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.windowWidth = window.innerWidth;
    this.onChangeWindowSize(this.windowWidth);
  }

  onChangeTheme() {
    console.log('asdd');
    this.toggleThemeEmitter.emit(this.toggleTheme);
    if (this.toggleTheme == 'dark') {
      this.toggleTheme = 'light';
    } else {
      this.toggleTheme = 'dark';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
    this.onChangeWindowSize(this.windowWidth);
  }

  onBtnClose() {
    if (this.windowWidth < 1200) {
      this.btnClose = this.btnClose ? false : true;
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
