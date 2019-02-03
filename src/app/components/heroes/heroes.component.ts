import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';

import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private heroservice: HeroService) { }

  heroes: Hero[];
  ngOnInit() {
    this.heroservice.getHeroes().subscribe((response: any) => { this.heroes = response.data.results; });
  }

}
