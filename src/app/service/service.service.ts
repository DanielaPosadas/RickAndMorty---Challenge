import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Results } from '../interfaces/interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  URL_API = 'https://rickandmortyapi.com/api/character';

  getDefaultCharacters(): Observable<Results> {
    return this.http.get<Results>(`${this.URL_API}`).pipe(
      map((resp) => {
        return resp as Results;
      })
    );
  }

  getCharacters(
    pagina: number,
    status: string,
    species: string,
    name: string
  ): Observable<Results> {
    return this.http
      .get<Results>(
        `${this.URL_API}/?page=${pagina}&name=${name}&status=${status}&species=${species}`
      )
      .pipe(
        map((resp) => {
          return resp as Results;
        })
      );
  }
}
