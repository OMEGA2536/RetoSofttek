import { SelectComponent } from './../select/select.component';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select-rounded',
  templateUrl: './select-rounded.component.html',
  styleUrls: ['./select-rounded.component.css']
})
export class SelectRoundedComponent extends SelectComponent implements OnInit {
  //optionAux: any[]=[];
  inputShow:boolean=true;
  constructor() {
    super();
   }
   @Input() _disabled: boolean = false;
   
  override ngOnInit(): void {
    this.optionAux = this.options;
  }
  /*onKeyUp(filter:string){
    this.optionAux = this.options;
    this.optionAux = this.optionAux.filter(x => x.descripcion.toLowerCase().includes(filter.toLowerCase()));
  }
  clearValue(){
    this.onKeyUp('');
  }*/
  inputMouseDown(e : any){
    this.filter.nativeElement.focus;
    e.stopPropagation();
    return false;
  }
 
}
