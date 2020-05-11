import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {

    const [field, fValue] = args;
    const filter = value.filter(value1 => value1[field] === fValue);
    return filter;
  }

}
