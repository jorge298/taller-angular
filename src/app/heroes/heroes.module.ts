import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes.component';
import { AddHeroComponent } from './add-hero/add-hero.component';



@NgModule({
  declarations: [
    HeroesComponent,
    AddHeroComponent
  ],
  imports: [
    CommonModule,
    FormsModule 
  ],
  exports: [
    HeroesComponent,
    AddHeroComponent
  ]
})
export class HeroesModule { }
