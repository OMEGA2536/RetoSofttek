import { Component, Input, Output, OnInit, EventEmitter, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  optionAux: any[]=[];
  @Input() placeholder : string = "";
  @Input() optionText : string = "text";
  @Input() optionValue : string = "value";
  @Input() returnObject : boolean = false;
  @Input() options: any[] = [];
  @Input() value: any = null;  
  @Output() selected = new EventEmitter();
  @ViewChild("filter") filter!:any ;
  visibleOptions: boolean = false;
  text: string = "";

  constructor() { }

  ngOnInit(): void {
    this.updateValue();
    this.optionAux = this.options;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateValue();    
  }

  updateValue(): void {
    if (this.placeholder) {
      this.text = this.placeholder;
    }

    if (this.value && this.options)  {
      const options: any[] = this.options.filter((option: object) => {
          return this.getOptionValue(option) == this.value;
      });

      this.text = this.getOptionText(options[0]) || '';
    }
  }

  getOptionText(option: object): string {
    return this.deepValueSearcher(option, this.optionText);
  }

  getOptionValue(option: object): string {
    return this.returnObject 
        ? JSON.stringify(option) 
        : this.deepValueSearcher(option, this.optionValue);
  }

  select(option: object): void {
    this.visibleOptions = false;
    this.text = this.getOptionText(option);

    this.selected.emit(this.getOptionValue(option));
  }

  deepValueSearcher(option: object, path: string): string {
    return path
        .replace(/\[|\]\.?/g, '.')
        .split('.')
        .filter((property: string) => property)
        .reduce((acc: any, val: any) => acc && acc[val], option);
  }
  onKeyUp(filter:string){
    this.optionAux = this.options;
    this.optionAux = this.optionAux.filter(x => x.descripcion.toLowerCase().includes(filter.toLowerCase()));
  }
  clearValue(){
    this.onKeyUp('');
  }
  focus(){
    this.filter.nativeElement.value ='';
    setTimeout(() => {
     
      this.filter.nativeElement.focus();
    }, 300);
    //this.filter.nativeElement.focus();
  }
}
