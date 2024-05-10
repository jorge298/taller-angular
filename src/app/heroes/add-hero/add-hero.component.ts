import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpRequestService } from '../../services/http-request.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.css'
})
export class AddHeroComponent {
  public heroe: any = {
    nombre: "My Hero!!",
    poder: 2
  }

  public hazClick():any {
    console.log(`Capturando el formulario:`, this.heroe);
    }

    constructor(private _http_service: HttpRequestService){
      //nada por ahora
    }

    public myService():any {
      // Obtener la data que trae httpRequestService desde el servidor
      this._http_service.postRequestWithParams( "Jorge",
      "jorge.estacio@correounivalle.edu.co" )
      .subscribe( ( data: any ) => {
      console.log(`Data en la peticion: `, data);
      });
      }
      
    
}
