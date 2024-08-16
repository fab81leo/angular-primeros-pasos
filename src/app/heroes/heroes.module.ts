import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  // ** Exponer mis componentes al mundo exterior | para que puedan consumir esto componentes **
  exports: [
    HeroComponent,
    ListComponent
  ],
  // ** Importando CommonModule que maneja DIRECTIVAS *ngIf y *ngFor **
  imports: [
    CommonModule
  ]
})
export class HeroesModule {}
