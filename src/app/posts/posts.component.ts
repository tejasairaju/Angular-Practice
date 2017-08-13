import { AppError, NotFoundError, BadRequestError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  posts:any[];
  
  constructor(private service:PostService ) { 
    
  }

  ngOnInit() {
    this.service.getAll().subscribe(
      posts=>{
        this.posts=posts;
    });

  }

  createPost(input:HTMLInputElement)
  {
    let post={title:input.value};
    input.value="";
    this.service.create(post).subscribe(
      posts=>{
        post["id"]=posts.id;
        this.posts.splice(0,0,post);
    },
    (error:AppError)=>{
      if(error instanceof BadRequestError)
        {
          alert('Bad Request Error occured');          
          console.log(error);
        }
        else{
          throw error;
        }
      
      
    });
  }
 updatePost(post)
 {
   this.service.update(post).subscribe(
     posts=>{
      console.log(posts);
    }
  );
 }

 deletePost(post)
 {
   this.service.delete(post).subscribe(
     ()=>{
     let index=this.posts.indexOf(post);
     this.posts.splice(index,1);
   },
  (error:AppError)=>{
    if(error instanceof NotFoundError)
      {
        alert('Post is deleted');        
        console.log(error);
      }
      else
      {
        throw error;
      }
      
  });
 }
  

}
