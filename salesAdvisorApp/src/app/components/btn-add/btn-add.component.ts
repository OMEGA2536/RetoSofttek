import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-add',
  templateUrl: './btn-add.component.html',
  styleUrls: ['./btn-add.component.css']
})
export class BtnAddComponent implements OnInit {

  @Input() text: string = '';
  @Input() _disabled: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
