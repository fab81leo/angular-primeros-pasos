import { Injectable } from '@angular/core';

// ** Este es un UUID único que voy a utilizar a lo largo de este servicio **
// ** Puedo usar un alias porque no me gusta el nombre v4 **
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  // onNewCharacter( character: Character): void {
  addCharacter( character: Character): void {

    // console.log('MainPage');
    // console.log(character);

    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    // ** Esta es una forma más optima | que usar la desestructuración **
    // ** La desestructuración cuando mi objeto tiene muchos campos o va creciendo no es tan recomendado **
    // ** Usamos el operador SPREAD ... y esparciamos todas las propiedades que tiene character en este objeto **
    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter( index: number ) {
    // ** Remueve un Character de la lista por su index o posicion en el arreglo **
    // ** .splice(index, 1) indica que borre solo un elemento del arreglo **
    // this.characters.splice(index, 1);
  // }

  deleteCharacterById( id:string ) {
    // ** filter => Regresa un nuevo arreglo con esta condición:  character.id !== id **
    this.characters = this.characters.filter( character => character.id !== id )
  }

}
