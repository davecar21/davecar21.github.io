import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-working-page',
  templateUrl: './working-page.component.html',
  styleUrls: ['./working-page.component.scss']
})
export class WorkingPageComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'http://somedomain.com/somescript';
    this.elementRef.nativeElement.appendChild(s);
  }

}
