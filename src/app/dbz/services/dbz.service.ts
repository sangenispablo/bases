import { v4 as uuid } from 'uuid';
import { Injectable } from '@angular/core';

import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Son Goku',
      power: 100,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 80,
    },
    {
      id: uuid(),
      name: 'Broly',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Gogeta',
      power: 5000,
    },
  ];

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }

  addCharacter(character: Character): void {
    const newCharacter = {
      id: uuid(),
      ...character,
    };
    this.characters.push(newCharacter);
  }
}
