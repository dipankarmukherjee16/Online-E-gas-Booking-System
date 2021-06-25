import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(public http:HttpClient) { }

  generateinvoice(gasbookingid:number,fare:number):Observable<any>{
    return this.http.post('http://localhost:8082/egasbookingapp/generateinvoice/'+gasbookingid+'/'+fare, {responseType:'text'});
  }

  cylinderdelivered(invoiceid:number):Observable<any>{
    return this.http.put("http://localhost:8082/egasbookingapp/cylinderdelivered/"+invoiceid, {responseType:'text'});
  }
}
