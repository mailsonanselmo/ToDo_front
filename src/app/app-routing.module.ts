import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalizadosComponent } from './components/finalizados/finalizados.component';
import { RealAllComponent } from './components/real-all/real-all.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';


const routes: Routes = [
  
  {
    path: '',
    component : RealAllComponent
  } , 
  {
    path: 'finalizados',
    component : FinalizadosComponent
  }, 
  {
    path: 'create',
    component : CreateComponent
  },
  {
    path: 'update/:id',
    component : UpdateComponent
  }


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
