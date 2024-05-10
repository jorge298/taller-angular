import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  activado:boolean = true;
  desactivado:boolean = false;

  heroes:string[] = ["Goku", "Saitama", "All Might"];

  heroes_list:any[] = [
    {"name":"Seiya","power":"Pegasus"},
    {"name":"Sakura","power":"CardCaptor"}
  ]
}
