import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  func(i){
    var l=document.getElementById('list'+i);
    l.style.borderBottom="2px solid #ff6e3d";
    var temp;
    for(var j=1;j<=3;j++){
      if(i!=j){
        temp=document.getElementById('list'+j);
        temp.style.borderBottom="2px solid white";
      }
    }
  }
}
