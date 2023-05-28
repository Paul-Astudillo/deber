import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaComponent } from './pages/lista/lista.component';
import { OtralisComponent } from './pages/otralis/otralis.component';

const routes: Routes = [
{path:"pagina/lista", component:ListaComponent},
{path:"pagina/formulario", component:FormularioComponent},
{path:"pagina/inicio", component:InicioComponent},
{path:"pagina/inputoutput", component:OtralisComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
