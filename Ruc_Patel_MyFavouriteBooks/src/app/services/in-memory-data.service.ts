import { Injectable } from '@angular/core';

import { Content } from '../helper-files/content-interface';
import { contentArray } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService{

  createDb() {
    const content : Content[] = contentArray;
    return {content};
  }
}
