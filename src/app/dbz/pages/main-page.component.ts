import { Component } from '@angular/core';

import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Son Goku',
      power: 100,
    },
    {
      name: 'Vegeta',
      power: 80,
    },
    {
      name: 'Broly',
      power: 10000,
    },
    {
      name: 'Gogeta',
      power: 5000,
    },
    {
      name: 'Vegetto',
      power: 20000,
    },
    {
      name: 'Jiren',
      power: 20000,
    },
    {
      name: 'Gohan',
      power: 1000,
    },
    {
      name: 'Piccolo',
      power: 300,
    },
    {
      name: 'Freezer',
      power: 53000,
    },
    {
      name: 'Cell',
      power: 3000,
    },
    {
      name: 'Majin Buu',
      power: 250000,
    },
    {
      name: 'Bills',
      power: 10000,
    },
    {
      name: 'Champa',
      power: 95000,
    },
    {
      name: 'Zamasu',
      power: 1000,
    },
    {
      name: 'Goku Black',
      power: 5000,
    },
    {
      name: 'Hit',
      power: 100,
    },
    {
      name: 'Vados',
      power: 1000,
    },
    {
      name: 'Whis',
      power: 1000,
    },
    {
      name: 'Krillin',
      power: 200,
    },
    {
      name: 'Ten Shin Han',
      power: 180,
    },
    {
      name: 'Yamcha',
      power: 140,
    },
    {
      name: 'Bulma',
      power: 5,
    },
    {
      name: 'Oolong',
      power: 10,
    },
    {
      name: 'Puar',
      power: 10,
    },
    {
      name: 'Maestro Roshi',
      power: 130,
    },
    {
      name: 'Yajirobe',
      power: 180,
    },
    {
      name: 'Chi-Chi',
      power: 130,
    },
    {
      name: 'Dende',
      power: 20,
    },
    {
      name: 'Mr. Popo',
      power: 1000,
    },
  ];
}
