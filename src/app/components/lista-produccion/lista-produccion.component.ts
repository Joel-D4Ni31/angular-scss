import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-lista-produccion',
  templateUrl: './lista-produccion.component.html',
  styleUrls: ['./lista-produccion.component.scss']
})
export class ListaProduccionComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
  }
  modalRef?: BsModalRef;
  posicionActualizar:number = 0;
  posicionVer:number =0;
 

  @Input() production: Product= {
  name: "",
  price: 0,
  image: "",
  description: "",
  porcentaje: "",
  estado: "",
  };
  
}
