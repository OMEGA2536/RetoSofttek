import { Component, OnInit } from '@angular/core';
import { SystemUsersService } from '../system-users.service';
import { SaleDTO } from 'src/app/models/sales';

@Component({
  selector: 'app-sales-advisor',
  templateUrl: './sales-advisor.component.html',
  styleUrls: ['./sales-advisor.component.css']
})
export class SalesAdvisorComponent implements OnInit { 
  salesList: SaleDTO[] =[]
  visibleSales:boolean = false;
  visibleProduct:boolean = false;
  constructor(
    private sistService : SystemUsersService,   
    ) {}
 
  ngOnInit(): void {
    this.LoadSales();   
  }
  LoadSales() {   
    this.sistService.GetListToGrid().subscribe( res =>{
      console.log("sales", res.objModel)
      this.salesList = res.objModel;
    }) 
  }
  addSale(){
    this.visibleSales = true;
  }
  addProdct(){
    this.visibleProduct = true;
  }
}
