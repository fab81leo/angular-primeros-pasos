import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName(): string {
    // ** Esto mismo lo podríamos hacer con un PIPE (Tuberia), pero es un tema que veremos mas adelante **
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    // ** Restableciendo valores a su contenido original **
    this.name = 'ironman';
    this.age = 45;

    // ** Estas instrucciones estan fuera del CICLO DE DETECCIÓN DE CAMBIOS DE ANGULAR **
    // ** Se debe tener mucho cuidado con estos códigos, no es que no se pueda hacer así **
    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }

}
