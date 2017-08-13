import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private date:any[];
  constructor() { 
    this.date=[
      {
        year:'2017',
        month:'1'
      },
      {
        year:'2017',
        month:'2'
      },
      {
        year:'2017',
        month:'3'
      }      
    ];
  }

  ngOnInit() {
  
  }

}
