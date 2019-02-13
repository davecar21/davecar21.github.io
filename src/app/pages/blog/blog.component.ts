import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements AfterViewInit {

  constructor() { }


  isContentFiltered = false;

  datatest = [
    {
      name: 'CSS Tips and Tricks Using Pseudo-Class',
      description: 'Tips and Tricks that you probably not know about Pseudo-Class',
      link: 'https://codeburst.io/css-tips-and-tricks-using-pseudo-class-fa83248bb6e0',
      content: '',
      tags: ['CSS', 'HTML']
    },
    {
      name: 'CSS Keyframe Animation with Pause between Keyframes',
      description: 'Once the CSS keyframe animation starts, we cannot pause it unless we will use javascript. So how can we make the animation to pause between keyframes?',
      link: 'https://codeburst.io/css-keyframe-animation-with-pause-between-keyframes-50a3b3d14354',
      content: '',
      tags: ['CSS']
    }
    ];
    // content | link should be '' to initialize the condition.


    currentContent = this.datatest;

  filterBlog(filterItem) {
    if (filterItem.content !== '') {
      this.isContentFiltered = true;
      this.currentContent = this.datatest.filter(content => content.name === filterItem.name);
    } else {

    }
  }

  resetFilter() {
    this.isContentFiltered = false;
    this.currentContent = this.datatest;
  }



  ngAfterViewInit() {
    
}

}
