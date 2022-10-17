import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistributionComponent } from './pages/admin/distribution/distribution.component';
import { ProductionComponent } from './pages/admin/production/production.component';
import { VentaComponent } from './pages/admin/venta/venta.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { HomeComponent } from './pages/admin/home/home.component';
import { GaleriaPedidosComponent } from './components/galeria-pedidos/galeria-pedidos.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'galeria-pedidos', component: GaleriaPedidosComponent },
  { path: 'distribution', component: DistributionComponent },
  { path: 'production', component: ProductionComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'venta', component: VentaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
