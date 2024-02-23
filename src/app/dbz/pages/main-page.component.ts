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
      power: 1000,
    },
    {
      name: 'Gogeta',
      power: 5000,
    },
  ];

  onDeleteIndex(index:number): void {
    this.characters.splice(index, 1);
  }

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }
}
