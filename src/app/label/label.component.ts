import { Component, OnInit } from '@angular/core';
import { labelList } from '../labelList';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  festesLabel = 'Ein fester String.';

  labelList = labelList;

  constructor() { }

  ngOnInit() {
  }


}
