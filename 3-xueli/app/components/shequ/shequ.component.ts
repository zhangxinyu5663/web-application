import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  // id:number;
  // name:string;
  infos;

  ngOnInit() {
    // this.name=this.route.snapshot.queryParams['name'];
    // this.id=this.route.snapshot.queryParams['id'];
    this.http.get('/api/infos').subscribe(data=>{
      this.infos=data;
    })
  }

}
