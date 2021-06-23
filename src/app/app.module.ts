import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { ViewallcustomerComponent } from './viewallcustomer/viewallcustomer.component';
import { ViewcustomerbyidComponent } from './viewcustomerbyid/viewcustomerbyid.component';
import { ViewcustomerbycylindertypeComponent } from './viewcustomerbycylindertype/viewcustomerbycylindertype.component';
import { ViewcustomerbycityComponent } from './viewcustomerbycity/viewcustomerbycity.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { LinkaadharComponent } from './linkaadhar/linkaadhar.component';
import { SurrendercustomerComponent } from './surrendercustomer/surrendercustomer.component';
import { ViewsurrenderedcustomerComponent } from './viewsurrenderedcustomer/viewsurrenderedcustomer.component';
import { ViewsurrenderedcustomerbyyearComponent } from './viewsurrenderedcustomerbyyear/viewsurrenderedcustomerbyyear.component';
import { ViewallsurrenderedcustomerComponent } from './viewallsurrenderedcustomer/viewallsurrenderedcustomer.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewcustomerComponent,
    ViewallcustomerComponent,
    ViewcustomerbyidComponent,
    ViewcustomerbycylindertypeComponent,
    ViewcustomerbycityComponent,
    AddcustomerComponent,
    EditcustomerComponent,
    LinkaadharComponent,
    SurrendercustomerComponent,
    ViewsurrenderedcustomerComponent,
    ViewsurrenderedcustomerbyyearComponent,
    ViewallsurrenderedcustomerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
