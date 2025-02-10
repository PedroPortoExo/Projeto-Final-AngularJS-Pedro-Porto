import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-filtro-vagas',
  imports: [],
  templateUrl: './filtro-vagas.component.html',
  styleUrl: './filtro-vagas.component.css'
})
export class FiltroVagasComponent {
  @Input() tecnologias: string[] = [];
  @Output() tecnologiaSelecionada = new EventEmitter<string>();

  selecionarTecnologia(tecnologia: string) {
    this.tecnologiaSelecionada.emit(tecnologia);
  }
}
