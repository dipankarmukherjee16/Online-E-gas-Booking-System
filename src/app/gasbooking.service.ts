import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 *          @author: Moinak Majumder        
 *          @version: 1.0   
 *          Description: It is a service that provides methods for 
						             making rest API call to the backend web-server
 *          Created at: 21-JUNE-2021
 */

@Injectable({
  providedIn: 'root'
})
export class GasbookingService {

  constructor(public http:HttpClient) { }

  viewbookingdetails(custid:number):Observable<any>{
    return this.http.get('http://localhost:8082/egasbookingapp/viewbookingdetails/'+custid);
  }

  viewbookingstatus(gasbookingid:number):Observable<any>{
    return this.http.get('http://localhost:8082/egasbookingapp/viewstatus/'+gasbookingid);
  }

  viewnoofcylindersbooked(year:number,custid:number):Observable<any>{
    return this.http.get('http://localhost:8082/egasbookingapp/viewnoofcylindersbooked/'+year+'/'+custid);
  }

  bookcylinder(custid:number):Observable<any>{
    return this.http.post("http://localhost:8082/egasbookingapp/bookcylinder/"+custid, {responseType:'text'});
  }
}
