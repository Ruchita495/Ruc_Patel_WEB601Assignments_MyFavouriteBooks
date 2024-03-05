import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { BookServiceService } from './services/book-service.service';
import { MessagesServiceService } from './services/messages-service.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContentListComponent],
  providers: [BookServiceService, MessagesServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Ruc_Patel_MyFavouriteBooks'
  singleContentItem: any;

  constructor(
    private bookService: BookServiceService,
    private messageSevice: MessagesServiceService
  ) {}

  ngOnInit(): void {
    this.bookService.getContentItemById(1).subscribe(data => {
      this.singleContentItem = data;
    });
  }
}
