import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { SystemUsersService } from 'src/app/system-users/system-users.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  @Input() visible : boolean = false;
  @Output() close = new EventEmitter();
  productForm!:FormGroup;
  constructor(private sistService : SystemUsersService,
    private fb: FormBuilder,) { 
    this.productForm = this.createProductForm()
  }
  createProductForm(): FormGroup<any> {
    return this.fb.group({
      Id:[0],
      Name:[''],
      Price:['']
    })
  }

  ngOnInit(): void {
  }
  addProduct(){
    let product :Product = this.productForm.value;
    this.sistService.InsertProduct(product).subscribe( res =>{
      if(res.objModel){
        this.close.emit();
      }
    })
  }
}
