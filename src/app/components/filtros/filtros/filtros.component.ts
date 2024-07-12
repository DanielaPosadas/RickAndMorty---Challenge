import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  @Output() status = new EventEmitter<any>();
  @Output() species = new EventEmitter<any>();
  @Output() name = new EventEmitter<any>();
  @Output() ParamsCleanBotton = new EventEmitter<any>();  

  NameWritten: string = ''; 
  statusSel: string = '';
  specieSel: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  NameCharacter(){
    this.name.emit(this.NameWritten);
  }
  

  StatusSelected(event:any){
  this.status.emit(event.target.value as string);
  }

  SpecieSelected(event:any){
  this.species.emit(event.target.value as string);
  }

  CharacterDefault(event:MouseEvent){
    this.NameWritten = '';
    this.statusSel = '';
    this.specieSel = '';
    this.ParamsCleanBotton.emit(event)
  }
}
