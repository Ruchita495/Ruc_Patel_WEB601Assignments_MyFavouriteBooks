import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList:ContentList;
  constructor(){
    this.contentList = new ContentList();

    this.contentList.addContent({
      id: 1,
      title: 'Bhagavad Gita',
      description: 'The Bhagavad Gita is set in a narrative framework of dialogue between the Pandava prince Arjuna and his charioteer guide Krishna, an avatar of Vishnu. At the start of the Kurukshetra War between the Pandavas and the Kauravas.',
      creator: 'Vyasa',
      imgURL: 'https://www.shutterstock.com/image-photo/utter-pardesh-india-bhagavad-gita-600nw-1848771181.jpg',
      type: 'Spiritual',
      tags: ["Sanskrit","Multilanguage"],
    });
    this.contentList.addContent({
      id: 2,
      title: 'Three Thousand Stitches',
      description: 'hree Thousand Stitches is a book written by Sudha Murthy and published in 2017. The book is a collection of 11 different stories, which she draws from her personal life, with a message engraved in every story.',
      creator: 'Sudha Murthy',
      imgURL: 'https://1.bp.blogspot.com/-S_260M3Og84/XOLk4Ahl7jI/AAAAAAAAAhE/rMkBx1giYkst8ee-I69R_89tqQkjKGvlQCLcBGAs/s1600/IMG_20190520_203356_935.jpg',
      type: 'Motivational',
      tags: ["self-sustainable","personal experiences"],
    });
    this.contentList.addContent({
      id: 3,
      title: 'Avengers',
      description: 'The Avengers are an all-star ensemble cast of established superhero characters from the Marvel Comics portfolio. Diegetically, these superheroes usually operate independently but occasionally assemble as a team to tackle especially formidable villains.',
      creator: 'Stan Lee ,Jack Kirby',
      imgURL: 'https://www.cardboardmemories.ca/cdn/shop/products/347a3d800381f5ce90967d1b2cdacfb5_700x700.jpg?v=1693984901',
      type: 'Comic',
      tags: ["Captain Marvel","Captain America","Iron Man"],
    });
  }
}
