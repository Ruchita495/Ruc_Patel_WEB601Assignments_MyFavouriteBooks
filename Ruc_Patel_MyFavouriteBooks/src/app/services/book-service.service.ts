import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentArray } from '../helper-files/contentDb';
import { MessagesServiceService } from './messages-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private messageService: MessagesServiceService) { }

  getContentArray(): Observable<any[]> {
    this.messageService.sendMessage('Content array loaded!');
    return of(contentArray);
  }

  getContentItemById(id: number): Observable<any> {
    const contentItem = contentArray.find(item => item.id === id);
    this.messageService.sendMessage(`Content Item at id: ${id}`);
    return of(contentItem);
  }
}
