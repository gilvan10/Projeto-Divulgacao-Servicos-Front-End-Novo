import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Service } from './service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
  nome: string = '';
  nomes: any[] = [];

  constructor(private service: Service) {}


  ngOnInit() {
    this.carregarNomes();
  }

  carregarNomes() {
    this.service.listar().subscribe(data => this.nomes = data);
  }

  salvar() {
    if (!this.nome.trim()) return;

    this.service.salvar(this.nome).subscribe(() => {
      this.nome = '';
      this.carregarNomes();
    });
  }

}
