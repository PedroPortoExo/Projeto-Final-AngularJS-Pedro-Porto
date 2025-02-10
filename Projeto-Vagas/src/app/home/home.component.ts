import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import vagas from '../../../public/assets/vagas.json';
import categorias from '../../../public/assets/categorias.json';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector:"home",
    standalone: true,
    imports: [RouterModule],
    templateUrl: './home.component.html',
    styleUrl: '../app.component.css'
})
export class HomeComponent {
  listVagas = vagas;
  listCategorias = categorias;
}