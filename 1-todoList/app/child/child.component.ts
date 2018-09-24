import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() arr1;
  @Input() arr2;
  @Output() clickfun1=new EventEmitter();
  @Output() clickfun2=new EventEmitter();
  @Output() clickfun3=new EventEmitter();
  @Output() clickfun4=new EventEmitter();

  fun1(idx){
    this.clickfun1.emit(idx);
  }
  fun2(idx){
    this.clickfun2.emit(idx);
  }
  fun3(idx){
    this.clickfun3.emit(idx);
  }
  fun4(idx){
    this.clickfun4.emit(idx);
  }  
}
