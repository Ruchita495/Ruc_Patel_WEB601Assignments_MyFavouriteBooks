import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesServiceService {

  private messagesSubject = new Subject<string>();
  messages$ = this.messagesSubject.asObservable();

  constructor() { }
  sendMessage(message: string) {
    this.messagesSubject.next(message);
  }
}
