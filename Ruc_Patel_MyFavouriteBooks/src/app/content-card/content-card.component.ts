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
      imgURL: 'counterstrike.png',
      type: 'Spiritual',
      tags: ["Sanskrit","Multilanguage"],
    });
    this.contentList.addContent({
      id: 2,
      title: 'Three Thousand Stitches',
      description: 'hree Thousand Stitches is a book written by Sudha Murthy and published in 2017. The book is a collection of 11 different stories, which she draws from her personal life, with a message engraved in every story.',
      creator: 'Sudha Murthy',
      imgURL: 'rdr2.png',
      type: 'Motivational',
      tags: ["self-sustainable","personal experiences"],
    });
    this.contentList.addContent({
      id: 3,
      title: 'Avengers',
      description: 'The Avengers are an all-star ensemble cast of established superhero characters from the Marvel Comics portfolio. Diegetically, these superheroes usually operate independently but occasionally assemble as a team to tackle especially formidable villains.',
      creator: 'Stan Lee ,Jack Kirby',
      imgURL: 'seaofthieves.png',
      type: 'Comic',
      tags: ["Captain Marvel","Captain America","Iron Man"],
    });
  }
}
