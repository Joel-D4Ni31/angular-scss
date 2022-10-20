import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  products: Product[] = [{
    id: "P001",
    name: "parquet",
    price: 28,
    image: "/assets/img/parquet.jpg",
    description: "Paquete de Parquet  x24 unidades",
    porcentaje: "100%",
    estado: "Entregado"
  },
  {
    id: "P002",
    name: "Socalo",
    price: 28,
    image: "/assets/img/zócalo.jpg",
    description: "Paquete de Socalos  x12 unidades",
    porcentaje: "100%",
    estado: "Entregado"
  }
];
salvados: Product[] = [];
agregarSalvado(elemento: Product): void{
  this.salvados.push(elemento);
}
  
}
