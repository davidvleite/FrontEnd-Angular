import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { Funcionario } from '../models/Funcionarios';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl = `${environment.ApiUrl}/Funcionario`
  
  constructor( private http: HttpClient ) { }

  GetFuncionarios() : Observable<Response<Funcionario[]>> {
    // let headers = new HttpHeaders().set('Access-Control-Allow-Origin','*');
    // headers = headers.append('Connection', 'keep-alive');
    // headers = headers.append('Accept', 'application/json, text/plain, */*');
    // headers = headers.append('Accept-Encoding', 'gzip, deflate, br');
    // const headers = new HttpHeaders()       
    // .append('Content-Type', 'application/json')       
    // .append('Access-Control-Allow-Headers', 'Content-Type')       
    // .append('Access-Control-Allow-Methods', 'GET')       
    // .append('Access-Control-Allow-Origin', '*');     
    // const x = this.http.get(this.apiUrl,  {headers});
    // console.log('returno x',x);
    
    return this.http.get<Response<Funcionario[]>>(this.apiUrl);
    
  }

}
