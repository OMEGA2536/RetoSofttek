import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-btn-secondary',
  templateUrl: './btn-secondary.component.html',
  styleUrls: ['./btn-secondary.component.css']
})
export class BtnSecondaryComponent implements OnInit {

  @Input() text: string = 'button';
  @Input() _disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
