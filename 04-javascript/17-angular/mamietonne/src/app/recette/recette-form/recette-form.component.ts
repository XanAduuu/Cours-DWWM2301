import { Component, Input, OnInit } from '@angular/core';
import { Recette } from '../Recette';
import { RecetteService } from '../recette.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recette-form',
  templateUrl: './recette-form.component.html',
  styleUrls: ['./recette-form.component.scss']
})
export class RecetteFormComponent implements OnInit {
  @Input() recette?: Recette;
  types: string[] = [];
  ingredientList: string = "";
  stepsList: string = "";
  isAddForm: boolean = false;

  constructor(private recetteService: RecetteService, private router: Router){}

  ngOnInit()
  {
    this.isAddForm = this.router.url.includes("add");
    // Je récupère la ĺiste des types
    this.types = this.recetteService.getRecetteTypeList();
    if(!this.recette)return;
    // je transforme mes arrays en string.
    this.ingredientList = this.recette.ingredients.join("\n");
    this.stepsList = this.recette.steps.join("\n");
  }
  hasType(type: string):boolean
  {
    if(!this.recette)return false;
    return this.recette.type.includes(type);
    // Je retourne true si ma recette est de ce type, et false, dans le cas contraire.
  }
  selectType($event: Event, type:string): void
  {
    if(!this.recette)return;
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    this.recette.type = isChecked?type:"";
  }
  onSubmit(): void
  {
    if(this.recette)
    {
      this.recette.ingredients = this.ingredientList.split("\n");
      this.recette.steps = this.stepsList.split("\n");
      if(this.isAddForm)
      {
        this.recetteService.addRecette(this.recette).subscribe(
          (recette)=>this.router.navigate(["/recette", recette.id])
        );
      }else
      {
        this.recetteService.updateRecette(this.recette).subscribe(
          ()=>this.router.navigate(["/recette", this.recette?.id])
        );
      }
    
    }
  }
}
