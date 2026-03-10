import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from '../models/models';

@Pipe({
  name: 'menuFilter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(items: MenuItem[], category: string): MenuItem[] {
    if (!items || !category) return items;
    return items.filter(item => item.category === category);
  }
}