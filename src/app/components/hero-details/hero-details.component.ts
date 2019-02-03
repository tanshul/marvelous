import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../services/hero.service';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  hero: Hero;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe((response: any) => { this.hero = response.data.results[0]; });
  }

  goBack() {
    this.location.back();
  }

}
