import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent  {

  @Input('title') title;
  @Output("change") change=new  EventEmitter();
  isselected=false;
  constructor() { }

 onClick()
 {
this.isselected=!this.isselected;
this.change.emit();
 }

}
