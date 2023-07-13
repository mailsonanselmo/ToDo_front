import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-real-all',
  templateUrl: './real-all.component.html',
  styleUrls: ['./real-all.component.css']
})
export class RealAllComponent implements OnInit{

  closed = 0;

  list: Todo[] = [];
  listFinalizados: Todo[] = [];

  constructor(private service: TodoService){ }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void{
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(todo => {
        if(todo.finalizar){
          this.listFinalizados.push(todo);
        }else{
          this.list.push(todo);
        }
      })
      this.closed = this.listFinalizados.length;
    })
  }

}
