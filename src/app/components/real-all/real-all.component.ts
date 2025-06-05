import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';  
@Component({
  selector: 'app-real-all',
  templateUrl: './real-all.component.html',
  styleUrls: ['./real-all.component.css']
})
export class RealAllComponent implements OnInit{

  closed = 0;

  list: Todo[] = [];
  listFinalizados: Todo[] = [];

  constructor(private service: TodoService, private router: Router){ }

  ngOnInit(): void {
    this.findAll();
     
  }

  findAll(): void{
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(todo => {
        if(todo.finalizado){
          this.listFinalizados.push(todo);
        }else{
          this.list.push(todo);
        }
      })
      this.closed = this.listFinalizados.length;
    })
  }

  finalizar(item: Todo): void {
    item.finalizado = true;
    this.service.update(item).subscribe(() => {
      this.service.message('Task finalizada com sucesso!');
      this.list = this.list.filter(todo => todo.id !== item.id);
      this.closed++;
    
  });
  }

  delete(id: any): void {
    this.service.delete(id).subscribe((resposta) => {
      if(resposta === null) {
        this.service.message('Taks deletada com sucesso!');
        this.list = this.list.filter(todo => todo.id !== id);
      }
    })
  }

   finalizados(): void {
    this.router.navigate(['finalizados']);
  }

  criar(): void {
    this.router.navigate(['create']);
  }

}
