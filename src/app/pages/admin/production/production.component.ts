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
    name: "parquet",
    price: 28,
    image: "https://media.istockphoto.com/photos/sample-of-wood-chipboard-wooden-laminate-veneer-material-for-interior-picture-id1135678299?b=1&k=20&m=1135678299&s=612x612&w=0&h=JVmRpRls_0Pq9f5GT2EPtmWXbzlLMXGlKX6L4YOuKU8=",
    description: "Paquete de Parquet  x24 unidades",
    porcentaje: "100%",
    estado: "Entregado"
  }
];
  
}
