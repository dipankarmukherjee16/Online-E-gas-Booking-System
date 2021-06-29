import { Pipe, PipeTransform } from '@angular/core';
import { Customerdto } from './customerdto';


@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(customer:Customerdto[], field:string): any {
    customer.sort((a,b)=>{if(a[field]>=b[field]) return 1; else return -1;})
    return customer;
  }

}
