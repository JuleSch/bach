import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-textfieldgroup',
  templateUrl: './textfieldgroup.component.html',
  styleUrls: ['./textfieldgroup.component.css']
})
export class TextfieldgroupComponent {
  // FormControl ist eine Direktive, mit der Sie eine FormControl-Instanz direkt erstellen und verwalten können.
  // Es wird in der Vorlage an ein HTML-Eingabefeld gebunden.
  name = new FormControl();

  // FormControlGroup:_
  textfieldForm = new FormGroup({
    name: new FormControl()
  });
}

