import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  private year:number;
  private month:number;
  constructor(private route:ActivatedRoute,private navigate:Router) { }

  ngOnInit() 
  {
    this.route.paramMap.subscribe(param=>
      {
        this.year=(+param.get("year"));        
        this.month=(+param.get("month"));        
      });
  }

  submit()
  {
    this.navigate.navigate(['/']);
  }
}
