import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  func(i){
    var l=document.getElementById('lis'+i);
    l.style.borderBottom="2px solid #ff6e3d";
    var temp;
    for(var j=1;j<=3;j++){
      if(i!=j){
        temp=document.getElementById('lis'+j);
        temp.style.borderBottom="2px solid white";
      }
    }
  }
}
