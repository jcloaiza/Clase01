import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/** Componentes */
import { AppComponent } from './app.component';
import { ActoresComponent } from './administracion/actores/actores.component';

@NgModule({
  declarations: [
    AppComponent,
    ActoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
