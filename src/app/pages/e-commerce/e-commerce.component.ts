import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../service/suppliers.service';


@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent implements OnInit {
  suppliers: any;
  api: string = "http://127.0.0.1:5000/api"
  constructor(private supplierService: SupplierService) { }

  ngOnInit() {
    
  }

  PedidosByForn: string = this.api + "/receipts/counts_by_supplier"
  PrazoMedioByForn: string = this.api + "/orders/avg_by_supplier"
  
}
