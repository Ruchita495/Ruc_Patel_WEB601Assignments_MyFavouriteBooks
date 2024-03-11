import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { BookServiceService } from './services/book-service.service';
import { ContentCardComponent } from './content-card/content-card.component';
import { HoverAffectDirective } from './hover-affect.directive';
import { AppMessagesComponent } from './components/app-messages/app-messages.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContentListComponent, ContentCardComponent, HoverAffectDirective, AppMessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Ruc_Patel_MyFavouriteBooks';
  singleContentItem: any;

  constructor(
    private bookService: BookServiceService) {}

  ngOnInit(): void {
    this.loadSingleContentItem();
    }

    loadSingleContentItem() {
      const idOfContentItemToLoad = 1; 
      this.bookService.getContentItemById(idOfContentItemToLoad).subscribe((data) => {
        this.singleContentItem = data;
        console.log(`Content Item at id: ${idOfContentItemToLoad}`);
      });
    }
  }

