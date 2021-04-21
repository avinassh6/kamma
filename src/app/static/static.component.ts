import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css']
})
export class StaticComponent implements OnInit {
  local ={
    title : 'Local News ',
    content : 'Hello !! Welcome to our online journals, *|* we are ready o publish journals in subjects of science, commerce',
    bgColor: '#78c05a',
    speed : 7
  }
  news ={
    title : 'News ',
    content : 'Hello !! Welcome to our online journals, *|* we are ready o publish journals in subjects of science, commerce',
    bgColor: '#ce9a3d',
    speed : 7
  }
  events  = { 
    title : 'Events ',
    content : 'Hello !! Welcome to our online journals, *|* we are ready o publish journals in subjects of science, commerce',
    bgColor: 'rgba(116,66,93,1)',
    speed :5
  }
  constructor() { }

  ngOnInit() {
  }

}
