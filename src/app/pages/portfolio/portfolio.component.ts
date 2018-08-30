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
      img: 'https://via.placeholder.com/150x150',
      title: 'title1 title1 title1',
      details: 'details1 details1 details1'
    },
    {
      img: 'https://via.placeholder.com/150x150',
      title: 'title2',
      details: 'details2'
    },
    {
      img: 'https://via.placeholder.com/150x150',
      title: 'title3',
      details: 'details3'
    },
    {
      img: 'https://via.placeholder.com/150x150',
      title: 'title4',
      details: 'details4'
    },
    {
      img: 'https://via.placeholder.com/150x150',
      title: 'title5',
      details: 'details5'
    },
    {
      img: 'https://via.placeholder.com/150x150',
      title: 'title6',
      details: 'details6'
    },
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
