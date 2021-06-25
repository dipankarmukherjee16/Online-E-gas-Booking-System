import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { BookcylinderComponent } from './bookcylinder/bookcylinder.component';
import { CylinderdeliveredComponent } from './cylinderdelivered/cylinderdelivered.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { GenerateinvoiceComponent } from './generateinvoice/generateinvoice.component';
import { LinkaadharComponent } from './linkaadhar/linkaadhar.component';
import { SurrendercustomerComponent } from './surrendercustomer/surrendercustomer.component';
import { ViewallcustomerComponent } from './viewallcustomer/viewallcustomer.component';
import { ViewallsurrenderedcustomerComponent } from './viewallsurrenderedcustomer/viewallsurrenderedcustomer.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { ViewbookingdetailsComponent } from './viewbookingdetails/viewbookingdetails.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { ViewcustomerbycityComponent } from './viewcustomerbycity/viewcustomerbycity.component';
import { ViewcustomerbycylindertypeComponent } from './viewcustomerbycylindertype/viewcustomerbycylindertype.component';
import { ViewcustomerbyidComponent } from './viewcustomerbyid/viewcustomerbyid.component';
import { ViewcylindersbookedComponent } from './viewcylindersbooked/viewcylindersbooked.component';
import { ViewstatusComponent } from './viewstatus/viewstatus.component';
import { ViewsurrenderedcustomerComponent } from './viewsurrenderedcustomer/viewsurrenderedcustomer.component';
import { ViewsurrenderedcustomerbyyearComponent } from './viewsurrenderedcustomerbyyear/viewsurrenderedcustomerbyyear.component';


const routes: Routes = [{path:'viewcustomer', component:ViewcustomerComponent,
                        children:[{path:'viewall', component:ViewallcustomerComponent},
                                  {path:'viewbyid', component:ViewcustomerbyidComponent},
                                  {path:'viewbycylindertype', component:ViewcustomerbycylindertypeComponent},
                                  {path:'viewbycity',component:ViewcustomerbycityComponent}]},
                        {path:'addcustomer', component:AddcustomerComponent},
                        {path:'editcustomer/:customerid', component:EditcustomerComponent},
                        {path:'linkaadhar', component:LinkaadharComponent},
                        {path:'viewsurrenderedcustomer', component:ViewsurrenderedcustomerComponent,
                        children:[{path:'viewallsurrendered', component:ViewallsurrenderedcustomerComponent},
                                  {path:'viewsurrenderedbyyear', component:ViewsurrenderedcustomerbyyearComponent}]},
                        {path:'surrendercylinder', component:SurrendercustomerComponent},
                        {path:'viewbooking', component:ViewbookingComponent,
                        children:[{path:'viewbookingdetails', component:ViewbookingdetailsComponent},
                                   {path:'viewstatus', component:ViewstatusComponent},
                                    {path:'viewnoofcylindersbooked', component:ViewcylindersbookedComponent}]},
                        {path:'bookcylinder', component:BookcylinderComponent},
                        {path:'generateinvoice', component:GenerateinvoiceComponent},
                        {path:'cylinderdelivered', component:CylinderdeliveredComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
