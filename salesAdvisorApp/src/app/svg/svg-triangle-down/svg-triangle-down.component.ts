import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-triangle-down',
  templateUrl: './svg-triangle-down.component.html',
  styleUrls: ['./svg-triangle-down.component.css']
})
export class SvgTriangleDownComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
