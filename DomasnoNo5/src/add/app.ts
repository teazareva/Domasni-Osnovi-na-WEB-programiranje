import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RIDERS, Rider } from './data/riders-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'MotoGP Riders';
  riders: Rider[] = RIDERS;
}
