import { Injectable } from '@angular/core';
import { Recette, Types } from './Recette';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class RecetteService {

  constructor() { }
  getRecetteList():Recette[]
  {
    return this.http.get<Recette[]>("api/recettes").pipe(
      tap(this.log),
      catchError(err=>this.handleError(err, []))
    );
  }
  getRecetteById(recetteId: number): Observable<Recette|undefined>
  {
    return this.http.get<Recette>(`api/recettes/${recetteId}`).pipe(
      tap(this.log),
      catchError(err=>this.handleError(err, undefined))
    );
  }
  getRecetteTypeList(): string[]
  {
    return Object.values(Types);
  }
}
