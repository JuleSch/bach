import {Component} from '@angular/core';

@Component({
  selector: 'label-component',
  template: '<label> Textfeld {{showNum}}: <input type="text" placeholder="schreib was"> </label>'
})
export default class NewLabelComponent {
  showNum = 0;

  constructor() {
    this.showNum = this.showNum ++;
  }

}
