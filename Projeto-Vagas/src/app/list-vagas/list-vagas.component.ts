import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FiltroVagasComponent } from '../filtro-vagas/filtro-vagas.component';
import { HeaderComponent } from '../header/header.component';
import vagas from '../../../public/assets/vagas.json';

@Component({
  selector: 'app-list-vagas',
  imports: [FiltroVagasComponent],
  templateUrl: './list-vagas.component.html',
  styleUrl: './list-vagas.component.css'
})
export class ListVagasComponent {
  listVagas: any[] = [];
  listaVagas = vagas;
  vagasFiltradas: any[] = [];
  tecnologiasDisponiveis: string[] = [];
  tecnologiaSelecionada: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/vagas.json').subscribe(data => {
      this.listVagas = data;
      this.vagasFiltradas = data;
      this.extrairTecnologias();
    });
  }

  filtro(tecnologia: string) {
    this.tecnologiaSelecionada = tecnologia;
    this.vagasFiltradas = this.listVagas.filter(vaga =>
      vaga.tecnologias.includes(tecnologia)
    );
  }

  limparFiltro() {
    this.tecnologiaSelecionada = null;
    this.vagasFiltradas = [...this.listVagas];
  }

  private extrairTecnologias() {
    const tecnologiasSet = new Set<string>();
    this.listVagas.forEach(vaga => {
      vaga.tecnologias.forEach((tec: string) => tecnologiasSet.add(tec));
    });
    this.tecnologiasDisponiveis = Array.from(tecnologiasSet);
  }
}
