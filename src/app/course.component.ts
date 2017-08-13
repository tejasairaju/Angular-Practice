import { CourseService } from './course.service';
import { Component } from "@angular/core";

@Component({
    selector:"course",
    template:`<h1> Courses </h1>
    <ol>
    <li *ngFor="let c of courses">{{c}}</li>
    </ol>
    <button class="btn btn-primary">save</button>`
})
export class CourseComponent
{
    courses;
    constructor(service:CourseService)
    {   
        this.courses=service.getCourse();
    }
    
}