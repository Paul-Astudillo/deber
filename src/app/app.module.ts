import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './templete/titulo/titulo.component';
import { MenuComponent } from './templete/menu/menu.component';
import { ListaComponent } from './pages/lista/lista.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { OtralisComponent } from './pages/otralis/otralis.component';
import { AgregarComponent } from './pages/agregar/agregar.component';


@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    MenuComponent,
    ListaComponent,
    FormularioComponent,
    InicioComponent,
    UsuarioComponent,
    OtralisComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    NgIf,
    FormsModule,
    MatInputModule,
    MatFormFieldModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
