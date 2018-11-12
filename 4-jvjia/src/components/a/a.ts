import { Component } from '@angular/core';

/**
 * Generated class for the AComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'a',
  templateUrl: 'a.html'
})
export class AComponent {

  text: string;

  constructor() {
    console.log('Hello AComponent Component');
    this.text = '这是A组件';
  }

  // get(){
  //   console.log('a组件的方法');
  // }
}
