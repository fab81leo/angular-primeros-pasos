import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html'
})
export class AddCharacterComponent {

  // ** Así creamos nuestra instancia de este emisor de eventos **
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  // ** Estableciendo valores por defecto para mi character **
  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {

    // ** Cuando JAVASCRIPT llegue a este punto se va a detener mi ejecución hay **
    // debugger;


    console.log(this.character);
    // ** Si la longitud del nombre es cero no hacemos nada **
    if ( this.character.name.length === 0) return;

    // ** Crear un objeto y usar el operador SPREAD | Para evitar el paso por REFERENCIA **
    // ** Con esto nos aseguramos de enviar un nuevo objeto **
    // this.onNewCharacter.emit({...this.character});

    // ** Por ahora lo dejamos asi **
    this.onNewCharacter.emit(this.character);

    // ** Limpiando la información de mi Formulario una vez enviamos los datos **
    // this.character.name = '';
    // this.character.power = 0;

    // ** Esta forma es un poquito mas eficiente
    this.character = { name: '', power: 0 };
  }

}
