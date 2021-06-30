import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 *          @author: Debabrata Deb        
 *          @version: 1.0   
 *          Description: It is a service that provides the method for 
						             rest API call to the backend web-server
 *          Created at: 21-JUNE-2021
 */

@Injectable({
  providedIn: 'root'
})
export class SurrendercylinderService {

  constructor(public http:HttpClient) {

   }

   viewAllSurrenderedCustomer():Observable<any>{

    return this.http.get('http://localhost:8082/egasbookingapp/viewallsurrenderedcustomer');
  }

  viewSurrenderedCustomerByYear(year:number):Observable<any>{

    return this.http.get('http://localhost:8082/egasbookingapp/viewsurrendercustomer/'+year);
  }

  surrenderCylinder(custid:number):Observable<any>{

    return this.http.post('http://localhost:8082/egasbookingapp/surrendercylinder/'+custid, {responseType:'text'});
  }
  
}
