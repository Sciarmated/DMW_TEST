import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regex'
})
export class RegexPipe implements PipeTransform {

  transform(regex: string, value: string): string {
    if(!regex) return value
    return ''

  }

}
