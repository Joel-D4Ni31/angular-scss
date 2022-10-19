import { Component, TemplateRef, OnInit} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {


  constructor(){}
  ngOnInit(): void {
  }
 

  products: Product[] = [{
    name: "parquet",
    price: 28,
    image: "/assets/img/parquet.jpg",
    description: "Paquete de Parquet  x24 unidades",
    porcentaje: "100%",
    estado: "Entregado"
  },
  {
    name: "Socalo",
    price: 28,
    image: "/assets/img/zócalo.jpg",
    description: "Paquete de Socalos  x12 unidades",
    porcentaje: "100%",
    estado: "Entregado"
  }
];
  

}
