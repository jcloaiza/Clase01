import { Component } from '@angular/core';
import { Actor } from 'src/app/interface/actores';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html'
})
export class ActoresComponent {

  /** Propiedad actor */
  public actor: Actor = { Nombre: '', Apellido: '' }

  /** propiedad mensaje */
  public msg: boolean = false;


  /**Evemto guardar */
  Guardar() {

    if (this.actor.Nombre === '' || this.actor.Apellido === '') {
      this.msg = true;
    } else {
      this.msg = false;
      //Puedo guardar la informciín

    }
    //event.preventDefault();
    console.log("actor", this.actor);
  }


  /*
    cambiarNombre($event:any){
      this.nombre=$event.target.value;
      //console.log($event);
    }
    */
}
