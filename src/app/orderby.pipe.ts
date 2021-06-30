import { Pipe, PipeTransform } from '@angular/core';
import { Customerdto } from './customerdto';

/**
 *          @author: Dipankar Mukherjee        
 *          @version: 1.0   
 *          Description: It is a pipe that provides the method  
						             to sort the data
 *          Created at: 26-JUNE-2021
 */

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(customer:Customerdto[], field:string): any {
    customer.sort((a,b)=>{if(a[field]>=b[field]) return 1; else return -1;})
    return customer;
  }

}
