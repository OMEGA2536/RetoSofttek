import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-btn-primary',
  templateUrl: './btn-primary.component.html',
  styleUrls: ['./btn-primary.component.css']
})
export class BtnPrimaryComponent implements OnInit {

  @Input() text: string = 'button';
  //@Output() click = new EventEmitter();
  @Input() _disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
