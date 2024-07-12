import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Characters, Espisodes } from 'src/app/interfaces/interface';
import { APIService } from 'src/app/service/service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  getID: any;
  @Input() character: Characters | undefined;
  episodes: Espisodes[] | undefined;
  buttonActivate: boolean = false;

  constructor(
    public modal: NgbActiveModal,
    private service: APIService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  closeModal() {
    this.modal.close();
  }

  onButton() {
    this.buttonActivate = !this.buttonActivate;
    console.log('Capitulos en boton', this.character?.episode);
    console.log('Hola, si funciona');
  }
}
