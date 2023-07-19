import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RECETTES } from '../RecetteList';
import { Recette } from '../Recette';

@Component({
  selector: 'app-detail-recette',
  templateUrl: './detail-recette.component.html',
  styleUrls: ['./detail-recette.component.scss']
})
export class DetailRecetteComponent implements OnInit {
  recetteList: Recette[] = RECETTES;
  recette?: Recette;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    /* 
      La propriété snapshot nous retourne un instantané de la route actuelle.
      La propriété paramMap nous retourne un objet contenant tous les paramètres de la route.
      la méthode "get" récupère le paramètre donné en argument.
      (c'est le nom défini dans le router)
    */
    const recetteId: number = parseInt(this.route.snapshot.paramMap.get("id")??"");
    console.log(recetteId);
    
    this.recette = this.recetteList.find(rec=>rec.id===recetteId);
    console.log(this.recette);
    
  }
}
