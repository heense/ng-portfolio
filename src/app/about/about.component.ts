import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('My awsome about page');

    meta.addTags([
      {
        name: 'author', content: 'Name.com'
      },
      {
        name: 'keywords', content: 'Some fancy keywords '
      },
      {
        name: 'description', content: 'A cool description'
      }
    ]);
  }

  ngOnInit() {
  }

}
