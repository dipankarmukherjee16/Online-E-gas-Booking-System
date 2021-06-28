import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CylindertypeService {

  constructor(public http:HttpClient) { }

    viewAllCylinderTypes():Observable<any>{

      return this.http.get('http://localhost:8082/egasbookingapp/viewAllCylinder');
    }

   
}
