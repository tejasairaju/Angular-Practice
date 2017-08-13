import { Component } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent  {

  categories=[
    {id:'1',name:"Machine Language"},
    {id:'2',name:"Internet Of Things"},
    {id:'3',name:"Hadoop and Big Data"}
  ];
  submit(f)
  {
    console.log(f.value);
  }

  }
