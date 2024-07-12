import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  PActual: number = 1;
  PTotales: number = 3;

  @Output() PCharacter = new EventEmitter<any>();
  @Output() ChangePage = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  nextPage() {
    if (this.PTotales > this.PActual) {
      this.PActual = this.PActual + 1;
    }
    this.PCharacter.emit(this.PActual);
  }

  prevPage() {
    if (this.PActual > 1) {
      this.PActual = this.PActual - 1;
      this.PCharacter.emit(this.PActual);
    }
  }

  cambiarPage(page: number) {
    this.PActual = page;
    this.ChangePage.emit(page);
  }
}
