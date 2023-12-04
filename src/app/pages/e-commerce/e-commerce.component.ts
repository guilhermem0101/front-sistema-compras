import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../service/suppliers.service';


@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent implements OnInit {

  api: string = "http://127.0.0.1:5000/api"
  selectedTab: string;
  constructor() { }

  ngOnInit() {
    
  }

  dash: string = this.api + "/receipts/dash"
  
  

  
}
