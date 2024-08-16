import { Component } from '@angular/core';

// ** Servicios Utilizados **
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  // ** Inyección de Dependencias de mi Servicio **
  // ** Esto me habilita en este componente toda la información que este siendo usada en DbzService **
  constructor( private dbzService: DbzService) { }

  get characters(): Character[] {
    // ** Usamos el operador SPREAD para crear una copia de mi arreglo y evitar cambios por referencia **
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( character: Character): void {
    this.dbzService.addCharacter( character );
  }

}
