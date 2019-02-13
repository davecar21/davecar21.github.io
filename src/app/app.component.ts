import { Component, OnInit, ElementRef } from '@angular/core';
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

  constructor(private location: Location, private elementRef: ElementRef) {

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

  showNavBar(data: string) {
    if (data == 'dark') {
      //light
      this.elementRef.nativeElement.style.setProperty('--bg-darker', '#1c567d'); // bg
      this.elementRef.nativeElement.style.setProperty('--bg-dark', '#fafafa');  // bg
      this.elementRef.nativeElement.style.setProperty('--blue-dark', '#121a21'); // font
      this.elementRef.nativeElement.style.setProperty('--blue-light', '#243442'); // font
      this.elementRef.nativeElement.style.setProperty('--blue-accent', '#2f90d0'); // font
    } else {
      //dark
      this.elementRef.nativeElement.style.setProperty('--bg-darker', '#121a21'); // bg
      this.elementRef.nativeElement.style.setProperty('--bg-dark', '#243442');  // bg
      this.elementRef.nativeElement.style.setProperty('--blue-dark', '#2f90d0'); // font
      this.elementRef.nativeElement.style.setProperty('--blue-light', 'rgb(130, 188, 226)'); // font
      this.elementRef.nativeElement.style.setProperty('--blue-accent', '#d5e9f6'); // font
    }
  }

}
