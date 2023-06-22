import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-real-all',
  templateUrl: './real-all.component.html',
  styleUrls: ['./real-all.component.css']
})
export class RealAllComponent implements OnInit{

  list: Todo[] = [
    {
      titulo: "Teste1",
      dataFinalizar: new Date,
      finalizar: false
    },
    {
      titulo: "Teste2",
      dataFinalizar: new Date,
      finalizar: true
    }
  ]




  constructor(){ }

  ngOnInit(): void {
    
  }
  

}
