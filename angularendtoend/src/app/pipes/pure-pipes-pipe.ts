import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purePipes'
})
export class PurePipesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value * value;
  }

}
