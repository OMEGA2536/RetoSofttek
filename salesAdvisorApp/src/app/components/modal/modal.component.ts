import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }
  @Input() visible: boolean = false;
  @Input() closeIconVisible: boolean = true;
  @Input() size: string = '';
  @Input() title: string = '';
  @Output() close = new EventEmitter();

  ngOnInit(): void {
  }
  
  getWidth(): string {

    if (this.size === 'xs') return 'w-3-12'

    if (this.size === 'sm') return 'w-5-12'

    if (this.size === 'md') return 'w-7-12 xl:w-9-12 lg:w-11-12'

    if (this.size === 'lg') return 'w-9-12'

    if (this.size === 'xl') return 'w-11-12'

    return ''
  }
}
