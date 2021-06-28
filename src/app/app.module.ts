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
import { ViewcylindersbookedComponent } from './viewcylindersbooked/viewcylindersbooked.component';
import { ViewstatusComponent } from './viewstatus/viewstatus.component';
import { ViewbookingdetailsComponent } from './viewbookingdetails/viewbookingdetails.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { GenerateinvoiceComponent } from './generateinvoice/generateinvoice.component';
import { BookcylinderComponent } from './bookcylinder/bookcylinder.component';
import { CylinderdeliveredComponent } from './cylinderdelivered/cylinderdelivered.component';
import { LoginComponent } from './login/login.component';
import { ViewcylindertypesComponent } from './viewcylindertypes/viewcylindertypes.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ViewallinvoicesComponent } from './viewallinvoices/viewallinvoices.component';



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
    ViewallsurrenderedcustomerComponent,
    ViewcylindersbookedComponent,
    ViewstatusComponent,
    ViewbookingdetailsComponent,
    ViewbookingComponent,
    GenerateinvoiceComponent,
    BookcylinderComponent,
    CylinderdeliveredComponent,
    LoginComponent,
    ViewcylindertypesComponent,
    HomeComponent,
    ContactusComponent,
    ViewallinvoicesComponent
    
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
