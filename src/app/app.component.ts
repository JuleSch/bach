import { Component } from '@angular/core';
import LabelComponent from './label-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Thesis';
  componentData = null;

  createLabelComponent(){
    this.componentData = {
      component: LabelComponent,
      inputs: {
        showNum: 9
      }
    };
  }
}


