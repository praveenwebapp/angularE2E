import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipes'
})
export class ImpurePipesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return  new Date().toLocaleTimeString();;
  }

}
