import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Characters } from 'src/app/interfaces/interface';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() character: Characters | undefined;

  idCharacter: number | undefined;

  constructor(private router:Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onSelect(){
    const refModal = this.modalService.open(ModalComponent);
    refModal.componentInstance.character = this.character;
    }
}
