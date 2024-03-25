import { Component, OnInit,  } from '@angular/core';
import { BookServiceService } from './services/book-service.service';

@Component({
  selector: 'app-root',
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

