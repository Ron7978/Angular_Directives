import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  Day:number = Date.now();

  x:number = 0.625;
  y:number = 1.4141;
  
  constructor() { }

  ngOnInit(): void {
  }

}
