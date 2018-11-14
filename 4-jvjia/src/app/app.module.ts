import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //核心模块 相关语法都在这里
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'; //ionic语法相关的模块
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { APage } from '../pages/a/a';
import { BPage } from '../pages/b/b';

import { ComponentsModule } from '../components/components.module';  //引入组件根模块 就不用一个个的引入单个组件
import{HttpClientModule} from '@angular/common/http';
import { AddPage } from '../pages/add/add';
import { LoginPage } from '../pages/login/login';
import { SetPage } from '../pages/set/set';
import { RegisterPage } from '../pages/register/register';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    BPage,
    AddPage,
    LoginPage,
    SetPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      tabsHideOnSubPages:true, //跳转之后隐藏下面的导航栏

       iconMode: 'ios',
      // modalEnter: 'modal-slide-in',
      // modalLeave: 'modal-slide-out',
      // tabsPlacement: 'bottom',
      // pageTransition: 'ios-transition'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    BPage,
    AddPage,
    LoginPage,
    SetPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
