import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  func(i){
    var l=document.getElementById('ll'+i);
    l.style.borderTop="2px solid #ff6e3d";
    l.style.borderLeft="1px solid #d3d3d3";
    l.style.borderRight="1px solid #d3d3d3";
    l.style.borderBottom="white";
    var temp;
    for(var j=1;j<=3;j++){
      if(i!=j){
        temp=document.getElementById('ll'+j);
        temp.style.border="none";
      }
    }
  }
}
