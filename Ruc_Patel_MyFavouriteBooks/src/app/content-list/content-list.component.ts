import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from "../content-card/content-card.component";
import { ContentFilterPipe } from "../content-filter.pipe";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, FormsModule, ContentFilterPipe],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {

  contentArray: Content[];
  constructor() {
    this.contentArray = [{
      id: 1,
      title: 'Bhagavad Gita',
      description: 'The Bhagavad Gita is set in a narrative framework of dialogue between the Pandava prince Arjuna and his charioteer guide Krishna, an avatar of Vishnu. At the start of the Kurukshetra War between the Pandavas and the Kauravas.',
      creator: 'Vyasa',
      imgURL: 'https://www.shutterstock.com/image-photo/utter-pardesh-india-bhagavad-gita-600nw-1848771181.jpg',
      type: 'Spiritual',
      tags: ["Sanskrit","Multilanguage"],
    },
    {
      id: 2,
      title: 'Three Thousand Stitches',
      description: 'hree Thousand Stitches is a book written by Sudha Murthy and published in 2017. The book is a collection of 11 different stories, which she draws from her personal life, with a message engraved in every story.',
      creator: 'Sudha Murthy',
      imgURL: 'https://1.bp.blogspot.com/-S_260M3Og84/XOLk4Ahl7jI/AAAAAAAAAhE/rMkBx1giYkst8ee-I69R_89tqQkjKGvlQCLcBGAs/s1600/IMG_20190520_203356_935.jpg',
      type: 'Motivational',
      tags: ["self-sustainable","personal experiences"],
    },
    {
      id: 3,
      title: 'Avengers',
      description: 'The Avengers are an all-star ensemble cast of established superhero characters from the Marvel Comics portfolio. Diegetically, these superheroes usually operate independently but occasionally assemble as a team to tackle especially formidable villains.',
      creator: 'Stan Lee ,Jack Kirby',
      imgURL: 'https://www.cardboardmemories.ca/cdn/shop/products/347a3d800381f5ce90967d1b2cdacfb5_700x700.jpg?v=1693984901',
      type: 'Comic',
      tags: ["Captain Marvel","Captain America","Iron Man"],
    },
    {
      id: 4,
      title: 'The Power of Positive Thinking',
      description: 'The Power of Positive Thinking: A Practical Guide to Mastering the Problems of Everyday Living is a 1952 self-help book by American minister Norman Vincent Peale.',
      creator: 'Norman Vincent Peale',
      imgURL: 'https://upload.wikimedia.org/wikipedia/en/8/86/The_Power_of_Positive_Thinking_%28Norman_Vincent_Peale%29.png',
      type: ' ',
      tags: ["English"],
  },
  {
    id: 5,
    title: 'The Martian (Weir novel)',
    description: 'The Martian is a 2011 science fiction debut novel written by Andy Weir. The book was originally self-published on Weirs blog, in a serialized format.In 2014, the book was re-released after Crown Publishing Group purchased the exclusive publishing rights.',
    creator: 'Andy Weir',
    imgURL: 'https://static01.nyt.com/images/2014/02/05/books/05before-and-after-slide-T6H2/05before-and-after-slide-T6H2-superJumbo.jpg?quality=75&auto=webp&disable=upscale',
    type: 'Science fiction',
    tags: [	"Print", "e-book", "audio"],
},
{
  id: 6,
  title: 'The Girl on the Train',
  description: 'The Girl on the Train is a 2015 psychological thriller novel by British author Paula Hawkins that gives narratives from three different women about relationship troubles (caused by coercive/controlling men) and, for the main protagonist, alcoholism.',
  creator: 'Paula Hawkins',
  imgURL: 'https://m.media-amazon.com/images/I/81aZ76q5v0L._AC_UF1000,1000_QL80_.jpg',
  type: 'Mystery',
  tags: ["Print"],
}
,
  {
    id: 7,
    title: 'Vachanamrut',
    description: 'he Vachanamrut (IAST: Vacanāmṛta, lit. "immortalising ambrosia in the form of words") is a sacred Hindu text consisting of 273 religious discourses delivered by Swaminarayan from 1819 to 1829 CE and is considered the principal theological text within the Swaminarayan Sampradaya.',
    creator: 'Sahajanand Swami',
    imgURL: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Vachanamrut_English.jpg',
    type: ' ',
    tags: ["Print"],
  },
{
  id: 8,
  title: 'Caper story',
  description: 'The caper story is a subgenre of crime fiction. The typical caper story involves one or more crimes (especially thefts, swindles, or occasionally kidnappings) perpetrated by the main characters in full view of the reader.',
  creator: 'Parnell Hall',
  imgURL: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781605981048/caper-9781605981048_hr.jpg',
  type: 'Romance',
  tags: ["Print"],
}];
  }
  searchTitle: string = '';
  searchMsg: string = '';
  searchClr: string = '';

  searchCard(): void{
    const foundContent = this.contentArray.find(content => content.title === this.searchTitle); 

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
