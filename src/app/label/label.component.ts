import { Component, OnInit } from '@angular/core';
import { Label } from '../label';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  festesLabel = 'Ein fester String.';

  label: Label = {
    id: 1,
    name: 'Label'
  };


  constructor() { }

  ngOnInit() {
  }

}
