import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FiltroVagasComponent } from '../filtro-vagas/filtro-vagas.component';
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
  tecnologiasSelecionadas: string[] = [];


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/vagas.json').subscribe(data => {
      this.listVagas = data;
      this.vagasFiltradas = data;
      this.extrairTecnologias();//preenche as tecnologiasDisponiveis
    });
  }

  filtro(tecnologia: string) {
    if (!this.tecnologiasSelecionadas.includes(tecnologia)) {
      this.tecnologiasSelecionadas = [...this.tecnologiasSelecionadas, tecnologia]; // Atualiza corretamente agora tentei com push funcionava mas não da forma que queria
      //Cria um novo array copiando os elementos antigos e adicionando o novo. O Angular detecta a mudança, pois a referência do array mudou, acionando a atualização da UI.
  }
    this.aplicarFiltro();
  }

  removerFiltro(tecnologia: string) {
    this.tecnologiasSelecionadas = this.tecnologiasSelecionadas.filter(tec => tec !== tecnologia);
    this.aplicarFiltro();
  }


  limparFiltro() {
    this.tecnologiasSelecionadas.length = 0;
    this.vagasFiltradas = this.listVagas;
  }

  private aplicarFiltro() {
    if (this.tecnologiasSelecionadas.length === 0) {
      this.vagasFiltradas = this.listVagas;
      return;
    }
    this.vagasFiltradas = this.listVagas.filter(vaga =>
      this.tecnologiasSelecionadas.some(tec => vaga.tecnologias.includes(tec))// some percorre o array retornando true ou false
    );
  }

  private extrairTecnologias() {
    const tecnologiasSet = new Set<string>();// não permite duplicatas
    this.listVagas.forEach(vaga => {
      vaga.tecnologias.forEach((tec: string) => tecnologiasSet.add(tec));//convertendo para um array
    });
    this.tecnologiasDisponiveis = Array.from(tecnologiasSet);// armazenando o array em tecnologiasDisponiveis
  }
}
