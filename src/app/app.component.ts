import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'título de la página';

  capitalizar(): void{
    this.title = this.title.charAt(0).toUpperCase()+this.title.slice(1).toLocaleLowerCase();
  }
}
