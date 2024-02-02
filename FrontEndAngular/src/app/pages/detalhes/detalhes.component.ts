import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent  implements OnInit{

  constructor(private funcionarioService: FuncionarioService, private route:ActivatedRoute, private router: Router) {}

    funcionario? : Funcionario;
    id! : number;

    ngOnInit(): void {
      this.id = Number(this.route.snapshot.paramMap.get('id'));

      this.funcionarioService.GetFuncionario(this.id).subscribe((data) => {
        const dados = data.dados;

        dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString('pt-BR');
        dados.dataDeAlteracao = new Date(dados.dataDeAlteracao!).toLocaleDateString('pt-BR');
        this.funcionario = data.dados;
      })
    
  }
  
  InativaFuncionario(){
    this.funcionarioService.InativaFuncionario(this.id).subscribe((data) => {
      this.router.navigate(['']);
    })
  }


}
