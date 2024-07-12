import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Characters, Results } from 'src/app/interfaces/interface';
import { APIService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  CharactersList: Characters[] | undefined;
  NewPage: number = 0;
  statusChar: string = '';
  speciesChar: string = '';
  namechar: string = '';

  error: HttpErrorResponse | undefined;
  errorMessage: boolean = false;
  notFoundMess: string | undefined;

  constructor(private service: APIService) {}

  ngOnInit(): void {
    this.getDefaultChar(this.NewPage);
    this.getAllCharacters(
      this.NewPage,
      this.statusChar,
      this.speciesChar,
      this.namechar
    );
  }

  getDefaultChar(page: number) {
    this.service.getDefaultCharacters(page).subscribe((resp) => {
      this.CharactersList = resp.results;
      console.log('estos son', this.CharactersList);
    });
  }

  getAllCharacters(
    pagina: number,
    status: string,
    species: string,
    name: string
  ) {
    this.service.getCharacters(pagina, status, species, name).subscribe({
      next: (respCharacters) => {
        if (respCharacters) {
          this.CharactersList = respCharacters.results;
          console.log('Estos son:', this.CharactersList);
          this.errorMessage = false;
        }
      },
      error: (error) => {
        if (error.status === 404) {
          this.errorMessage = true;
          this.CharactersList = [];
          this.namechar = '';
          console.log('mensaje error', this.notFoundMess);
        }
      },
    });
  }

  PCharacter(pagina: number) {
    this.NewPage = pagina;
    this.getAllCharacters(
      this.NewPage,
      this.statusChar,
      this.speciesChar,
      this.namechar
    );
  }

  ChangePage(pagina: number) {
    this.NewPage = pagina;
    this.getAllCharacters(
      this.NewPage,
      this.statusChar,
      this.speciesChar,
      this.namechar
    );
    console.log('la pagina desde home', this.NewPage);
  }

  status(stat: string) {
    this.statusChar = stat;
    this.getAllCharacters(
      this.NewPage,
      this.statusChar,
      this.speciesChar,
      this.namechar
    );
    console.log('El filtro desde home', this.statusChar);
  }

  species(spec: string) {
    this.speciesChar = spec;
    this.getAllCharacters(
      this.NewPage,
      this.statusChar,
      this.speciesChar,
      this.namechar
    );
    console.log('El species desde home', this.speciesChar);
  }

  name(nam: string) {
    this.namechar = nam;
    this.getAllCharacters(
      this.NewPage,
      this.statusChar,
      this.speciesChar,
      this.namechar
    );
    console.log('El nombre desde home', this.namechar);
  }

  ParamsCleanBotton(event: any) {
    console.log('click al boton', event);
    this.getDefaultChar(this.NewPage);
    this.namechar = '';
    this.speciesChar = '';
    this.statusChar = '';
    this.NewPage = 0;
    this.errorMessage = false;
    console.log('estos son los nuevos personajes', this.CharactersList);
  }
}
