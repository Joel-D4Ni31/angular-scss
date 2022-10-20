import { Component, OnInit} from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.scss']
})
export class DistributionComponent implements OnInit {
 
 // constructor() {}
  constructor(){}
  ngOnInit(): void {
  }
 
  p_producto: string = "";
  p_imagen: string = "";
  p_estado: string ="";

  products: Product[] = [{
    id: "",
    name: "parquet",
    price: 2,
    image: "./img/parquet.jpg",
    estado: "Entregado",
    description: "",
    porcentaje: "",
  }];
  
  addProduct(): void{
    const newProduct ={
      id: "",
      name: this.p_producto,
      price: 0,
      image: this.p_imagen,
      estado: this.p_estado,
      description: "",
      porcentaje: "",
    }
    this.products.push(newProduct);
    this.p_producto = "";
    this.p_imagen = "";
    this.p_estado="";
  }
  deleteProduct(position: number): void{
    this.products.splice(position,1);
  }
  
}
