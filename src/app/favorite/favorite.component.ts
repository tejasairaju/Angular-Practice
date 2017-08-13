import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  active: boolean;
  constructor() {    
    this.active=false;
   }
  onClick()
  {
    this.active= !this.active;
  }

  ngOnInit() {
  }

}
