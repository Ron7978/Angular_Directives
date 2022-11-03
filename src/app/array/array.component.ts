import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  user=[12,22,34,55,42,89,11,5,6];

  empl = [
    {name:'Rounak'},
    {name:'Sonali'},
    {name:'Akhil'},
    {name:'Akshat'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
