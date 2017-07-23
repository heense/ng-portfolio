import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('My awsome home page');

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
