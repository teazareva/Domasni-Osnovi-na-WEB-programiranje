import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  images = [
    'img1.jpg', 'img2.png', 'img3.png',
    'img4.png', 'img5.png', 'img6.png',
    'img1.jpg', 'img2.png', 'img3.png',
    'img4.png', 'img5.png', 'img6.png'
  ];

  cards: any[] = [];

  firstCard: any = null;
  secondCard: any = null;
  lockBoard = false;
  tries = 0;
  matchedPairs = 0;

  constructor() {
    this.startGame();
  }

  startGame() {
    const shuffled = [...this.images].sort(() => 0.5 - Math.random());

    this.cards = shuffled.map(img => ({
      image: img,
      flipped: false,
      matched: false
    }));
  }

  flipCard(card: any) {
    if (this.lockBoard || card === this.firstCard || card.matched) return;

    card.flipped = true;

    if (!this.firstCard) {
      this.firstCard = card;
      return;
    }

    this.secondCard = card;
    this.tries++;

    this.checkMatch();
  }

  checkMatch() {
    const match = this.firstCard.image === this.secondCard.image;

    if (match) {
      this.disableCards();
    } else {
      this.unflipCards();
    }
  }

  disableCards() {
    this.firstCard.matched = true;
    this.secondCard.matched = true;

    this.matchedPairs++;

    if (this.matchedPairs === 6) {
      this.showMessage();
    }

    this.resetBoard();
  }

  unflipCards() {
    this.lockBoard = true;

    setTimeout(() => {
      this.firstCard.flipped = false;
      this.secondCard.flipped = false;
      this.resetBoard();
    }, 1000);
  }

  resetBoard() {
    this.firstCard = null;
    this.secondCard = null;
    this.lockBoard = false;
  }

  showMessage() {
    const again = confirm(
      `Браво! Ги најде сите парови за ${this.tries} обиди.\nДали сакаш да играш повторно?`
    );

    if (again) {
      this.tries = 0;
      this.matchedPairs = 0;
      this.startGame();
    }
  }
}
