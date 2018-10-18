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
      link: '',
      details: `
      I created this logo to represent as my personal logo identity.
      <br>
      I use Flat Long Shadow for the design.`
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1Px7JyRMPVh9VPYj0P_68pC45wZ8iu2p5',
      title: 'Marilou Diaz-Abaya',
      link: 'http://mariloudiazabaya.info/',
      details: `
      This website is about Marilou Díaz-Abaya a film director from the Philippines.
      <br>
      The content and design is made by MJ Estabillo. The website is developed using wordpress.
      `
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=14IW8ETQqkqf1KFZeA4pjpZ_EwrQOYhHV',
      title: 'Power Dressing',
      link: 'https://davecar-1.firebaseapp.com/ELearnProjects/PD/story_html5.html',
      details: `
      This website based game test if the user knows the proper attire for going in an interview.
      <br>
      This project is a interactive e-learning game developed using Articulate Storyline.
      <br>
      <i>Please try to use other browser like firefox, microsoft edge, etc. if the link did not show content.</i>
      `
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1XiXQKly7xVKm1y7tMCtEwOnHzNVQ_p-b',
      title: 'Riddles of the Caribbean',
      link: 'https://davecar-1.firebaseapp.com/ELearnProjects/RotC/story_html5.html',
      details: `
      This website based game provide a riddles that the user will need to answer based on it's difficulty.
      <br>
      This project is a interactive e-learning game developed using Articulate Storyline.
      <br>
      <i>Please try to use other browser like firefox, microsoft edge, etc. if the link did not show content.</i>
      `,
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
  }

  resetFilter() {
    this.toggleDetails = false;
    this.toggleTitle = false;
    this.currentContent = this.pfData;
  }

}
