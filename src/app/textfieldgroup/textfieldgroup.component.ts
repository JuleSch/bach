import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Address, Data, states } from '../data-model';


@Component({
  selector: 'app-textfieldgroup',
  templateUrl: './textfieldgroup.component.html',
  styleUrls: ['./textfieldgroup.component.css']
})


/*export class TextfieldgroupComponent1 {
  // FormControl ist eine Direktive, mit der Sie eine FormControl-Instanz direkt erstellen und verwalten können.
  // Es wird in der Vorlage an ein HTML-Eingabefeld gebunden.
  name = new FormControl();



  // FormControlGroup:_
  textfieldForm = new FormGroup({
    name: new FormControl()
  });

}*/

export class TextfieldgroupComponent {
  @Input() textData: Data;

  textfieldFormGroup: FormGroup;
  states = states;

  constructor(private fb: FormBuilder) { // <-- inject FormBuilder
    this.createForm();
  }

  createForm() {
    this.textfieldFormGroup = this.fb.group({ // <-- Formbuilder.group creates a FormGroup (Object) with keys and values are FormControl names and their definition
      name: ['', Validators.required], // <-- FormControl called "name" (siehe FormControl-Klasse) + required valiator
      address: this.fb.group (new Address())// <-- noch ne neue Gruppe
    });
  }

  ngOnChanges(){
    this.textfieldFormGroup.setValue({ // or textfieldGroup.reset, um form zu löschen.
      name: this.textData.name,
      address: this.textData.addresses[0] || new Address()
    });
  }


}







