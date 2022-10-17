//imports relational cores
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';


//imports de terceros
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';

//imports of project
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './commons/menu/menu.component';
import { FooterComponent } from './commons/footer/footer.component';
import { DistributionComponent } from './pages/admin/distribution/distribution.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { VentaComponent } from './pages/admin/venta/venta.component';
import { ProductionComponent } from './pages/admin/production/production.component';
import { HomeComponent } from './pages/admin/home/home.component';
import { GaleriaPedidosComponent } from './components/galeria-pedidos/galeria-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    DistributionComponent,
    ProductsComponent,
    VentaComponent,
    ProductionComponent,
    HomeComponent,
    GaleriaPedidosComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    NgxNavbarModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
