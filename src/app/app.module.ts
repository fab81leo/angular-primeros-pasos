// ** 1. Importaciones propias de JavaScript si es que tuvieramos **

// ** 2. Importaciones de Angular **
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ** 3. Librerias de Terceros **

// ** 4. Modulos y Componentes [Ordenados alfabeticamente] **

// ** Modulos **
import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';

// ** Componentes **
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CounterModule,
    DbzModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
