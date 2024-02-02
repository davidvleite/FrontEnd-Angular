import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  btnAcao = "Cadastrar";
  btnTitulo = "Cadastrar Funcionário!";

  constructor(private funcionarioService : FuncionarioService, private router: Router) {
  }

  ngOnInit(): void {
  }

  createFuncionario(funcionario: Funcionario){

       this.funcionarioService.CreateFuncionario(funcionario).subscribe((data) => {
          this.router.navigate(['/']);
       })
  }



}