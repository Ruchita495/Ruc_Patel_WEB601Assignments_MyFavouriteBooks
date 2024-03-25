import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from "../content-card/content-card.component";
import { ContentFilterPipe } from "../content-filter.pipe";
import { FormsModule } from '@angular/forms';
import { HoverAffectDirective } from '../hover-affect.directive';
import { BookServiceService } from '../services/book-service.service';
import { MessagesServiceService } from '../services/messages-service.service';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, FormsModule, ContentFilterPipe, HoverAffectDirective],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit{
  contentArray: any[] = [];

  constructor(private bookService: BookServiceService, private messageService: MessagesServiceService) {}

  onContentAdded(newContent: any) {
    this.contentArray.push(newContent);
    this.messageService.sendMessage(`Content '${newContent.title}' added successfully!`);
  }
  ngOnInit() {
    this.loadContentArray();
  }

  loadContentArray() {
    this.bookService.getContentArray().subscribe((data) => {
      this.contentArray = data;
      console.log('Content array loaded!');
    });
  }

  // contentArray: Content[];
 
  searchTitle: string = '';
  searchMsg: string = '';
  searchClr: string = '';

  searchCard(): void{
    const foundContent = this.contentArray.find(content => content.title.toLowerCase() === this.searchTitle); 

    if (foundContent) {
      this.searchMsg = `Content with title "${this.searchTitle}" exists.`;
      this.searchClr = 'green';
    }
    else {
      this.searchMsg = `Content with title "${this.searchTitle}" does not exist.`;
      this.searchClr = 'red';
    }
  }
}
