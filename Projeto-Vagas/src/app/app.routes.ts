import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListVagasComponent } from './list-vagas/list-vagas.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vagas', component: ListVagasComponent},



  // precisa ser a ultima rota
  { path: '**', component: NotFoundComponent }
];