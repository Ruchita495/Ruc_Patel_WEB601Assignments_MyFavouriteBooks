import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentArray } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }

  getContentArray(): Observable<any[]> {
    return of(contentArray);
  }

  getContentItemById(id: number): Observable<any> {
    const contentItem = contentArray.find(item => item.id === id);
    return of(contentItem);
  }
}
