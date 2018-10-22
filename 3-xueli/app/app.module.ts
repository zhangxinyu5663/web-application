import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { Child1Component } from './components/child1/child1.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { ErrorComponent } from './components/error/error.component';
import { AppRoutingModule } from './/app-routing.module';

import {HttpClientModule} from '@angular/common/http'; //根模块中引入HTTP服务
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { FooterComponent } from './components/footer/footer.component';
import { Cchild1Component } from './components/cchild1/cchild1.component';
import { Child2Component } from './components/child2/child2.component';
import { Child3Component } from './components/child3/child3.component';
import { Child4Component } from './components/child4/child4.component';
import { Child5Component } from './components/child5/child5.component';
import { Cchild3Component } from './components/cchild3/cchild3.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { Cchild5Component } from './components/cchild5/cchild5.component';
import { Cchild4Component } from './components/cchild4/cchild4.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    TongbudetailComponent,
    FooterComponent,
    Cchild1Component,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    Child5Component,
    Cchild3Component,
    CoursedetailComponent,
    Cchild5Component,
    Cchild4Component,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'tongbu/:courseId',component:TongbudetailComponent},
      {path:'tongbu',component:TongbuComponent},
      {path:'course/:courseId',component:CoursedetailComponent},
      {path:'course',component:CourseComponent},
      {path:'shequ',component:ShequComponent},
      {path:"",redirectTo:'home',pathMatch:'full'}, //重定向路由（默认路由）
      //{path:"**",component:ErrorComponent}  //通配符路由
      {path:'home',component:HomeComponent,children:[
        {path:'child1',component:Child1Component,children:[
          {path:'cchild1',component:Cchild1Component},
          {path:"",redirectTo:"cchild1",pathMatch:"full"}
        ]},
        {path:"child2",component:Child2Component},
        {path:"child3",component:Child3Component,children:[
          {path:"cchild3",component:Cchild3Component},
          {path:"",redirectTo:"cchild3",pathMatch:"full"}
        ]},
        {path:"child4",component:Child4Component,children:[
          {path:"cchild4",component:Cchild4Component},
          {path:"",redirectTo:"cchild4",pathMatch:"full"}         
        ]},
        {path:"child5",component:Child5Component,children:[
          {path:'cchild5',component:Cchild5Component},
          {path:"",redirectTo:"cchild5",pathMatch:"full"}          
        ]},
        {path:"",redirectTo:"child1",pathMatch:"full"}
      ]}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
