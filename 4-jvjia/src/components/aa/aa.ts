import { Component } from '@angular/core';

/**
 * Generated class for the AaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'aa',
  templateUrl: 'aa.html'
})
export class AaComponent {

  text: string;

  constructor() {
    console.log('Hello AaComponent Component');
    this.text = 'Hello World';
  }
  get(){
    console.log('a组件的方法');
  }
}
