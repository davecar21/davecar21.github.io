import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class BlogComponent implements AfterViewInit {

  constructor() { }


  isContentFiltered = false;

  datatest = [
    {
      name: 'Sample Title',
      description: 'Sample Description',
      content:
      `<h4>content</h4>
      <p>
      content here again
      content here again
      content here again
      content here again
      content here again
      <br>
      <pre>
      .hover-target:hover + .hover-element{
        opacity: 1;
        transform: translateX(0);
      }
      .hover-element{
          border-radius: 5px;
          background: #c0392b;
          margin: 0px 10px;
          text-align: center;
          padding: 5px 10px;
          opacity: 0;
          transform: translateX(40px);
          transition: all 1.5s ease;
        }
      </pre>
      </p>
      `,
      tags: ['CSS', 'HTML']
    },
    {
      name: 'Title',
      description: 'Sample Description',
      content: '<h4>Title content</h4>',
      tags: ['CSS', 'HTML']
    },
    {
      name: 'Data',
      description: 'Sample Description',
      content: '<h4>Data content</h4>',
      tags: ['CSS', 'HTML']
    }
    ];

    currentContent = this.datatest;

  filterBlog(filterItem) {
    this.isContentFiltered = true;
    this.currentContent = this.datatest.filter(content => content.name === filterItem);
    console.log(this.currentContent);
  }

  resetFilter() {
    this.isContentFiltered = false;
    this.currentContent = this.datatest;
  }



  ngAfterViewInit() {
    try {
      (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
      console.log('adsbygoogle');
    } catch (e) {
      console.error(e);
    }
  }

}
