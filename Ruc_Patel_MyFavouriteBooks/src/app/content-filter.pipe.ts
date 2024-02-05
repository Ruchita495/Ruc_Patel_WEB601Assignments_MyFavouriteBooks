import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentFilter',
  standalone: true
})
export class ContentFilterPipe implements PipeTransform {

  transform(contents: Content[], uniqueType: string): Content[] {
    return contents.filter((content) => content.type?.includes(uniqueType));
  }

}
