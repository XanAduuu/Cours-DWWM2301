import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recette } from '../Recette';
import { RecetteService } from '../recette.service';

@Component({
  selector: 'app-detail-recette',
  templateUrl: './detail-recette.component.html',
  styleUrls: ['./detail-recette.component.scss']
})
export class DetailRecetteComponent implements OnInit {
  recette?: Recette;

  constructor(private route: ActivatedRoute, private router: Router, private recetteService: RecetteService){}

  ngOnInit(): void {
    /* 
      La propriété snapshot nous retourne un instantané de la route actuelle.
      La propriété paramMap nous retourne un objet contenant tous les paramètres de la route.
      la méthode "get" récupère le paramètre donné en argument.
      (c'est le nom défini dans le router)
    */
    const recetteId: number = parseInt(this.route.snapshot.paramMap.get("id")??"");
    console.log(recetteId);
    
    this.recetteService.getRecetteById(recetteId).subscribe(recette=>this.recette = recette);
    console.log(this.recette);
    
  }
  goToRecetteListe()
  {
    this.router.navigate(["/recettes"]);
  }
  goToEditRecette()
  {
    this.router.navigate(["/recette/edit", this.recette?.id])
  }
  deleteRecette()
  {
    if(!this.recette)return
    this.recetteService.deleteRecetteById(this.recette.id!).subscribe(()=>this.goToRecetteListe());
  }
}
