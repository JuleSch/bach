import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { TextfieldsComponent } from './textfields/textfields.component';
import { LabelComponent } from './label/label.component';
import NewLabelComponent from './label-component';
import DynamicComponent from './dynamic.component';
import { TextfieldgroupComponent } from './textfieldgroup/textfieldgroup.component';


@NgModule({
  declarations: [
    AppComponent,
    TextfieldsComponent,
    LabelComponent,
    NewLabelComponent,
    DynamicComponent,
    TextfieldgroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
