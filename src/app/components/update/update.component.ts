import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})


export class UpdateComponent implements OnInit{


  todo: Todo = {
    titulo: '',
    descricao: '',
    dataFinalizar: new Date(),
    finalizado: false
  }

  constructor (private router: Router,private service: TodoService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.todo.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
      
  }

  findById(): void {
    
    this.service.findById(this.todo.id).subscribe((resposta) => {
      this.todo = resposta;
    }, error => {
      this.service.message('Erro ao atualizar tarefa! Verifique os dados informados.');
    });
  }

  update(): void {
    this.service.update(this.todo).subscribe((resposta) => {
      this.service.message('Tarefa atualizada com sucesso!');
      this.router.navigate(['']);
    }, error => {
      this.service.message('Erro ao atualizar tarefa! Verifique os dados informados.');
      this.router.navigate(['']);
    });
  }

  cancel(): void{
    this.router.navigate( ['']);
  }


  formatarData(): void {
    let data = new Date(this.todo.dataFinalizar);
    this.todo.dataFinalizar = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }



}



