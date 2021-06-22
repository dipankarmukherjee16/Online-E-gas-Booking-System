import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { ViewallcustomerComponent } from './viewallcustomer/viewallcustomer.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { ViewcustomerbycityComponent } from './viewcustomerbycity/viewcustomerbycity.component';
import { ViewcustomerbycylindertypeComponent } from './viewcustomerbycylindertype/viewcustomerbycylindertype.component';
import { ViewcustomerbyidComponent } from './viewcustomerbyid/viewcustomerbyid.component';


const routes: Routes = [{path:'viewcustomer', component:ViewcustomerComponent,
                        children:[{path:'viewall', component:ViewallcustomerComponent},
                                  {path:'viewbyid', component:ViewcustomerbyidComponent},
                                  {path:'viewbycylindertype', component:ViewcustomerbycylindertypeComponent},
                                  {path:'viewbycity',component:ViewcustomerbycityComponent}]},
                        {path:'addcustomer', component:AddcustomerComponent},
                        {path:'editcustomer/:customerid', component:EditcustomerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
