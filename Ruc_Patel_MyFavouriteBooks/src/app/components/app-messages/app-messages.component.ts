import { Component, OnInit } from '@angular/core';
import { MessagesServiceService } from '../../services/messages-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-messages.component.html',
  styleUrl: './app-messages.component.scss'
})
export class AppMessagesComponent implements OnInit{
  messages: string[] = [];

  constructor(private messagesService: MessagesServiceService) {}

  ngOnInit(): void {
    this.messagesService.messages.subscribe((message) => {
      this.messages.push(message);
    })
  }

}
