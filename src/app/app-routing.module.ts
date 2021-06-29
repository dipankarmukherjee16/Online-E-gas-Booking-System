import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { BookcylinderComponent } from './bookcylinder/bookcylinder.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CylinderdeliveredComponent } from './cylinderdelivered/cylinderdelivered.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { EgasGuard } from './egas.guard';
import { GenerateinvoiceComponent } from './generateinvoice/generateinvoice.component';
import { HomeComponent } from './home/home.component';
import { LinkaadharComponent } from './linkaadhar/linkaadhar.component';
import { LoginComponent } from './login/login.component';
import { SurrendercustomerComponent } from './surrendercustomer/surrendercustomer.component';
import { ViewallcustomerComponent } from './viewallcustomer/viewallcustomer.component';
import { ViewallinvoicesComponent } from './viewallinvoices/viewallinvoices.component';
import { ViewallsurrenderedcustomerComponent } from './viewallsurrenderedcustomer/viewallsurrenderedcustomer.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { ViewbookingdetailsComponent } from './viewbookingdetails/viewbookingdetails.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { ViewcustomerbycityComponent } from './viewcustomerbycity/viewcustomerbycity.component';
import { ViewcustomerbycylindertypeComponent } from './viewcustomerbycylindertype/viewcustomerbycylindertype.component';
import { ViewcustomerbyidComponent } from './viewcustomerbyid/viewcustomerbyid.component';
import { ViewcylindersbookedComponent } from './viewcylindersbooked/viewcylindersbooked.component';
import { ViewcylindertypesComponent } from './viewcylindertypes/viewcylindertypes.component';
import { ViewstatusComponent } from './viewstatus/viewstatus.component';
import { ViewsurrenderedcustomerComponent } from './viewsurrenderedcustomer/viewsurrenderedcustomer.component';
import { ViewsurrenderedcustomerbyyearComponent } from './viewsurrenderedcustomerbyyear/viewsurrenderedcustomerbyyear.component';


const routes: Routes = [{path:'home', component:HomeComponent},
                        {path:'contactus', component:ContactusComponent},
                        {path:'viewcustomer', component:ViewcustomerComponent, canActivate:[EgasGuard], data:{role:"admin"},
                        children:[{path:'viewall', component:ViewallcustomerComponent},
                                  {path:'viewbyid', component:ViewcustomerbyidComponent},
                                  {path:'viewbycylindertype', component:ViewcustomerbycylindertypeComponent},
                                  {path:'viewbycity',component:ViewcustomerbycityComponent}]},
                        {path:'addcustomer', component:AddcustomerComponent,  canActivate:[EgasGuard], data:{role:"admin"}},
                        {path:'editcustomer/:customerid', component:EditcustomerComponent,  canActivate:[EgasGuard], data:{role:"admin"}},
                        {path:'linkaadhar', component:LinkaadharComponent,  canActivate:[EgasGuard], data:{role:"admin"}},
                        {path:'viewsurrenderedcustomer', component:ViewsurrenderedcustomerComponent, canActivate:[EgasGuard], data:{role:"admin"},
                        children:[{path:'viewallsurrendered', component:ViewallsurrenderedcustomerComponent},
                                  {path:'viewsurrenderedbyyear', component:ViewsurrenderedcustomerbyyearComponent}]},
                        {path:'surrendercylinder', component:SurrendercustomerComponent, canActivate:[EgasGuard], data:{role:"user"}},
                        {path:'viewbooking', component:ViewbookingComponent, canActivate:[EgasGuard],
                        children:[{path:'viewbookingdetails', component:ViewbookingdetailsComponent, canActivate:[EgasGuard], data:{role:"admin"}},
                                    {path:'viewnoofcylindersbooked', component:ViewcylindersbookedComponent, canActivate:[EgasGuard], data:{role:"admin"}}]},
                        {path:'bookcylinder', component:BookcylinderComponent, canActivate:[EgasGuard], data:{role:"user"}},
                        {path:'viewstatus', component:ViewstatusComponent, canActivate:[EgasGuard], data:{role:"user"}},
                        {path:'generateinvoice', component:GenerateinvoiceComponent,  canActivate:[EgasGuard], data:{role:"admin"}},
                        {path:'cylinderdelivered', component:CylinderdeliveredComponent,  canActivate:[EgasGuard], data:{role:"admin"}},
                        {path:'viewallinvoices', component:ViewallinvoicesComponent,  canActivate:[EgasGuard], data:{role:"admin"}},
                        {path:'viewcylindertypes', component:ViewcylindertypesComponent,  canActivate:[EgasGuard], data:{role:"admin"}},
                        {path:'login', component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
