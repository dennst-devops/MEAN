import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.getMyPokemon();
  }

  getMyPokemon() {
    let tempObservable = this._httpService.getPokemon();
    tempObservable.subscribe((data: any) => {
      console.log("Got our pokemon from the component!", data);
      console.log("The most interesting fact is a height of: " + data.abilities[0].ability.url);

      let abilityObservable = this._httpService.getAbilities(data.abilities[0].ability.url);
      abilityObservable.subscribe((data: any) => {
        console.log("Got the abilities from the component!", data);
        console.log("There are " + data.pokemon.length +" with the same ability.");
        console.dir(data.pokemon.length);
      })
    });

  }
}