import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  // ** Evento que vamos a emitir **
  // onDelete = Index value : number
  @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter(); // ** Es lo mismo **
  // ublic onDelete = new EventEmitter<number>();  // ** Es lo mismo **

  public onDelete: EventEmitter<string> = new EventEmitter(); // ** Es lo mismo pero cambio el tipo **

  onDeleteCharacter( id?: string ): void {
    // console.log({ index });
    // ** Si el ID no existe nunca lo manda a llamar **
    if (!id) return;
    // console.log({id});
    // ** Nunca se llama si no tengo un id **
    this.onDelete.emit( id );
  }

}
