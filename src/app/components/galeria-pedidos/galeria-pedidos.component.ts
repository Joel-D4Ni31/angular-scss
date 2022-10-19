import { Component, Input , TemplateRef, OnInit, Output, EventEmitter} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-galeria-pedidos',
  templateUrl: './galeria-pedidos.component.html',
  styleUrls: ['./galeria-pedidos.component.scss']
})
export class GaleriaPedidosComponent implements OnInit {

  @Input() elementos: Product[] = [];
  salvados: number = 0;
  constructor(public modalService: BsModalService){};

  ngOnInit(): void {
  }
  
  @Output() salvar = new EventEmitter();
  salvarVenta(i: number): void{
    this.salvar.emit(); 
  }
  modalRef?: BsModalRef;
  posicionActualizar:number = 0;
  posicionVer:number =0;
 
  openModal(template: TemplateRef<any>,position :number) {
    this.modalRef = this.modalService.show(template);
    this.posicionActualizar=position;
    this.d_descripcion=this.elementos[this.posicionActualizar].description;
    this.d_ruta=this.elementos[this.posicionActualizar].image;
    this.d_nombre=this.elementos[this.posicionActualizar].name;
    this.d_porcentaje=this.elementos[this.posicionActualizar].porcentaje;
    this.d_estado=this.elementos[this.posicionActualizar].estado;
  }
  openModal1(template1: TemplateRef<any>,position :number) {
    this.modalRef = this.modalService.show(template1);
    this.posicionVer=position;
    this.d_descripcion=this.elementos[this.posicionVer].description;
    this.d_ruta=this.elementos[this.posicionVer].image;
    this.d_nombre=this.elementos[this.posicionVer].name;
    this.d_porcentaje=this.elementos[this.posicionVer].porcentaje;
    this.d_estado=this.elementos[this.posicionVer].estado;
    this.d_price=this.elementos[this.posicionVer].price;
  }
  d_descripcion: string="";
  d_ruta: string ="";
  d_nombre: string ="";
  d_porcentaje: string ="";
  d_estado: string ="";
  d_price: number = 0;


  title = 'angular-tarea';


  actComprobante(): void{
    
    const replace: any ={
      name: this.d_nombre,
      price: 28,
      image: this.d_ruta,
      description: this.d_descripcion,
      porcentaje: this.d_porcentaje,
      estado: this.d_estado
    }
    this.elementos.splice(this.posicionActualizar,1,replace);
    this.d_descripcion="";
    this.d_ruta="";
    this.d_nombre="";
    this.d_porcentaje="";
    this.d_estado="";
    console.log(this.d_descripcion)
    console.log(this.elementos);
  }
}
