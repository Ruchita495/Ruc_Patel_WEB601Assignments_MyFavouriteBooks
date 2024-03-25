import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentArray } from '../helper-files/contentDb';
import { MessagesServiceService } from './messages-service.service';
import { HttpClient } from '@angular/common/http';
import { Content } from '../helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private apiUrl = 'api/content';
  constructor(private messageService: MessagesServiceService, private http: HttpClient) { }

  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>(this.apiUrl, content);
  }

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
