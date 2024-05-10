import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { HttpRequestService } from '../services/http-request.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeroesComponent,
    AddHeroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HeroesComponent,
    AddHeroComponent
  ],
  providers: [
    HttpRequestService
  ]
})
export class HeroesModule { }
