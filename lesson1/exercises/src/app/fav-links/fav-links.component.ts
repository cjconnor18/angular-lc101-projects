import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks=["https://www.facebook.com/", "https://education.launchcode.org/intro-to-professional-web-dev/chapters/angular-lsn1/exercises.html"]
  constructor() { }

  ngOnInit() {
  }

}
