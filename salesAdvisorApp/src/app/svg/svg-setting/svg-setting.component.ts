import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-setting',
  templateUrl: './svg-setting.component.html',
  styleUrls: ['./svg-setting.component.css']
})
export class SvgSettingComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
