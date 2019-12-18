import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://images-na.ssl-images-amazon.com/images/I/31Y3Z64XZQL.jpg';
  image3 = 'https://www.televisionpost.com/wp-content/uploads/2019/04/OceanS-8-inside.jpg';

  constructor() { }

  ngOnInit() {
  }

}