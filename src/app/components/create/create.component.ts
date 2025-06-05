import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  todo: Todo = {
    titulo: '',
    descricao: '',
    dataFinalizar: new Date(),
    finalizado: false
  }

  constructor(private router: Router, private service: TodoService) { }

  ngOnInit(): void {

  }

  create(): void {
    this.formatarData();
    this.service.create(this.todo).subscribe((resposta) => {
      this.service.message('Tarefa criada com sucesso!');
      this.router.navigate(['']);
    }, error => {
      this.service.message('Erro ao criar tarefa! Verifique os dados informados.');
    } );
  }

  cancel(): void{
    this.router.navigate( ['']);
  }

  formatarData(): void {
    let data = new Date(this.todo.dataFinalizar);
    this.todo.dataFinalizar = `${data.getMonth() + 1}/${data.getDate()}/${data.getFullYear()}`
  }

}
