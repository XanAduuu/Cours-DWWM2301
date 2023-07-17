import { Component, OnInit } from '@angular/core';
import { Recette } from './Recette';
import { RECETTES } from './RecetteList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Super Mamietonne';
  recetteList: Recette[] = RECETTES;
  recetteSelected: Recette|undefined;

  ngOnInit(): void 
  {
    console.table(this.recetteList);
    // this.selectRecette(this.recetteList[0]);
  }

  selectRecette(recetteId: string): void
  {
    const index: number = parseInt(recetteId);

    const recette: Recette|undefined = this.recetteList.find(rec=>rec.id===index);

    if(recette)
    {
      console.log(`Vous avez selectionné ${recette.name}`); 
    }
    else
    {
      console.log("Aucune recette correspondante");
    }
    this.recetteSelected = recette;
  }
}
