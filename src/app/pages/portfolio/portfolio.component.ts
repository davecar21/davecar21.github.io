import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PortfolioComponent implements OnInit {

  toggleTitle = false;
  toggleDetails = false;

  pfData = [
    {
      img: 'https://drive.google.com/uc?export=view&id=1wvHRLtMFX2Sd5Y3hQ1UpPBzJx3mwFzMR',
      title: 'Personal Logo',
      details: `My Personal Logo
      I created this logo to represent as my personal logo identity.
      I use Flat Design Long Shadow for the design.`
    }
  ];

  currentContent = this.pfData;

  constructor() { }

  ngOnInit() {
  }

  filterBlog(filterItem) {
    this.toggleDetails = true;
    this.toggleTitle = true;
    this.currentContent = this.pfData.filter(content => content.title === filterItem);
    console.log(this.currentContent);
  }

  resetFilter() {
    this.toggleDetails = false;
    this.toggleTitle = false;
    this.currentContent = this.pfData;
  }

}
