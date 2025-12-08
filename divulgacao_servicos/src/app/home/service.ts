import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface prestadorSevico {
  id?: string;
  nome: string;
}

@Injectable({
  providedIn: 'root',
})
export class Service {
  private apiUrl = 'http://localhost:8080/prestador-servico';

  constructor(private http: HttpClient) {}

  listar(): Observable<prestadorSevico[]> {
    return this.http.get<prestadorSevico[]>(this.apiUrl);
  }

  salvar(nome: string): Observable<prestadorSevico> {
    return this.http.post<prestadorSevico>(this.apiUrl, { nome });
  }
}
