import { ActivatedRoute } from '@angular/router';
import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  private datas;
  constructor(private githubService:GithubService,private route:ActivatedRoute) { }

  ngOnInit() {
    let snap=this.route.snapshot.queryParamMap.get("page");
    console.log("queryparam snapshot =" +snap);
    this.route.queryParamMap.subscribe(
      param=>
      {
        console.log(param);
        let get= (+param.get("page"));
        let has= param.has("page");
        let keys = param.keys;
        console.log("get page param = "+get+" has page param = "+has+" keys = "+keys);
        //this.service.getProfile(id);  //real time
      });
    this.githubService.getAll().subscribe( followers=>this.datas=followers);
  }

}
