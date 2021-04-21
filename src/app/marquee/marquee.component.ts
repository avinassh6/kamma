import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.css']
})
export class MarqueeComponent implements OnInit {
  @Input() marObj;
  
  constructor() { }

  ngOnInit() {
  }

}
