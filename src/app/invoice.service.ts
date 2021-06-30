import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


/**
 *          @author: Moinak Majumder        
 *          @version: 1.0   
 *          Description: It is a service that provides methods for 
						             making rest API call to the backend web-server
 *          Created at: 23-JUNE-2021
 */

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(public http:HttpClient) { }

  generateinvoice(gasbookingid:number,fare:number):Observable<any>{
    return this.http.post('http://localhost:8082/egasbookingapp/generateinvoice/'+gasbookingid+'/'+fare, {responseType:'json'});
  }

  cylinderdelivered(invoiceid:number):Observable<any>{
    return this.http.put("http://localhost:8082/egasbookingapp/cylinderdelivered/"+invoiceid, {responseType:'text'});
  }

  getallinvoices():Observable<any>{
    return this.http.get('http://localhost:8082/egasbookingapp/viewallinvoices');
  }
}
