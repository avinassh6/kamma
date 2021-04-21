import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kammayouthbrigade';

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
}
