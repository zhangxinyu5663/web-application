import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  change(i){
    var l=document.getElementById('li'+i);
    l.style.borderBottom="2px solid #ff6e3d";
    var temp;
    for(var j=1;j<=3;j++){
      if(i!=j){
        temp=document.getElementById('li'+j);
        temp.style.borderBottom="2px solid white";
      }
    }
  }
}
