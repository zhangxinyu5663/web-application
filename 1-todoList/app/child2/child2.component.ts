import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  txt:string;
  @Output() keyout=new EventEmitter();
  
  func(e){
    if(e.keyCode==13){
      this.keyout.emit(this.txt);
      this.txt="";
    }
  }
}
