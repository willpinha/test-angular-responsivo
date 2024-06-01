import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { News } from './shared/interfaces/news';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  news: News[];

  constructor() {
    this.news = [
      {
        title: 'News 1',
        description:
          'Lula e Bolsonaro ficam melhores amigos e se casam. Janja encontra Michelle para uma reunião urgente',
        date: '2020-01-01',
      },
      {
        title: 'News 2',
        description: 'Bolsonaro e Lula se separam. Janja e Michelle se casam',
        date: '2020-01-02',
      },
    ];
  }
}
