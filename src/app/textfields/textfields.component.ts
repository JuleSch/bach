import { Component, OnInit } from '@angular/core';
import {Textfield} from '../textfield';

@Component({
  selector: 'app-textfields',
  templateUrl: './textfields.component.html',
  styleUrls: ['./textfields.component.css']
})
export class TextfieldsComponent implements OnInit {

  textfield: Textfield = {
    name: 'Textfeld'
  };
  constructor() { }

  ngOnInit() {
  }

}
