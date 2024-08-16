import { NgModule } from "@angular/core";

import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  // ** Exponer mis componentes al mundo exterior | para que puedan consumir este componente **
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}
