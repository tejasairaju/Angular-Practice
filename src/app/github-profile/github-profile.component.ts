import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute,private route1:Router) { }

  ngOnInit() {

    let snap=this.route.snapshot.paramMap.get("id");
    console.log("snapshot =" +snap);
    this.route.paramMap.subscribe(
      param=>
      {
        console.log(param);
        let get= (+param.get("id"));
        let has= param.has("id");
        let keys = param.keys;
        console.log("get id param = "+get+" has id param = "+has+" keys = "+keys);
        //this.service.getProfile(id);  //real time
      });
  }
    submit()
    {
      this.route1.navigate(['/followers'],{queryParams:{page:1,order:"asc"}});
    }

}
