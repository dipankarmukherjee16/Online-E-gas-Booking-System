import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewallcustomerComponent } from './viewallcustomer/viewallcustomer.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';

const routes: Routes = [{path:'viewcustomer', component:ViewcustomerComponent,
                        children:[{path:'viewall', component:ViewallcustomerComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
