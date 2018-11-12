import { NgModule } from '@angular/core';
import { AComponent } from './a/a';
import { BComponent } from './b/b';
import { AaComponent } from './aa/aa';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';

@NgModule({   //@NgModule是整个模块的装饰器函数
	declarations: [
        AComponent,
        BComponent,
        AaComponent
    ], //声明的组件默认往这里面添加 
	imports: [
        BrowserModule,
        IonicModule.forRoot(ComponentsModule),  //IonicModule模块作用于组件根模块
    ],
	exports: [
        AComponent,
        BComponent,
        AaComponent
    ]
})
export class ComponentsModule {}
