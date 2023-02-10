import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Advisor } from 'src/app/models/advisor';
import { Product } from 'src/app/models/product';
import { Sale } from 'src/app/models/sales';
import { SystemUsersService } from 'src/app/system-users/system-users.service';

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.css']
})
export class NewSaleComponent implements OnInit {
  @Input() visible : boolean = false;
  @Output() close = new EventEmitter();
  boolSale:boolean = true;
  productName:string='';
  productList : Product[] =[]
  advisorList : Advisor[] = []
  salesForm!:FormGroup;
  idProduct: number = 0;
  constructor(private sistService : SystemUsersService,
    private fb: FormBuilder,) { 
    this.salesForm = this.createSalesForm();
  }
  createSalesForm(): FormGroup<any> {
    return this.fb.group({
      Quantity:[''],
      AdvisorId:['']
    })
  }

  ngOnInit(): void {
    this.LoadProducts();
    this.LoadAdvisors();
  }
  LoadAdvisors() {
    this.sistService.LoadAdvisors().subscribe(res =>{
      console.log("res", res.objModel)
      this.advisorList = res.objModel;
    })
  }
  LoadProducts() {
    this.sistService.LoadProducts().subscribe(res =>{
      console.log("res", res.objModel)
      this.productList = res.objModel;
    })
  }
  addProduct(product : Product){
    console.log("idProduct", product.id)
    this.idProduct = product.id;
    this.productName = product.name;
    this.boolSale = false;
  }
  addSale(){
    console.log("form", this.salesForm.value)
    let sale : Sale= {
      id: 0,
      date: new Date(),
      advisorId: this.salesForm.value.AdvisorId,
      productId: this.idProduct,
      quantity: this.salesForm.value.Quantity
    }
    this.sistService.InsertSale(sale).subscribe(res =>{
      if(res.objModel){
        this.close.emit();
      }
    })
  }
}
