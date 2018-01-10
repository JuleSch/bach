import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { TextfieldsComponent } from './textfields/textfields.component';
import { LabelComponent } from './label/label.component';
import NewLabelComponent from './label-component';
import  DynamicComponent  from './dynamic.component';


@NgModule({
  declarations: [
    AppComponent,
    TextfieldsComponent,
    LabelComponent,
    NewLabelComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
