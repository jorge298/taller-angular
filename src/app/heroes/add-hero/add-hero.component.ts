import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    
}
