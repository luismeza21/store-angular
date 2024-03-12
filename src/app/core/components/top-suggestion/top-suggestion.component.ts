import { Component } from '@angular/core';

@Component({
  selector: 'app-top-suggestion',
  templateUrl: './top-suggestion.component.html',
  styleUrls: ['./top-suggestion.component.scss']
})
export class TopSuggestionComponent {

  suggestions: any[] = [
    {
      comment: "Excelente producto, llego como queria :)",
      name: "Luis Meza"
    },
    {
      comment: "Excelente producto, llego como queria :)",
      name: "Pacheco"
    },
    {
      comment: "Excelente producto, llego como queria :)",
      name: "Fulano"
    },
    {
      comment: "gracias me gusto mucho ;)",
      name: "Angular perez"
    }
  ]

}
