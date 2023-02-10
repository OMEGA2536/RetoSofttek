import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-power',
  templateUrl: './svg-power.component.html',
  styleUrls: ['./svg-power.component.css']
})
export class SvgPowerComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
