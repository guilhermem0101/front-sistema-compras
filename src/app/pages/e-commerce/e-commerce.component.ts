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
    this.getSuppliers();
  }

  PedidosByForn: string = this.api + "/receipts/counts_by_supplier"

  getSuppliers(): void {
    this.supplierService.getSuppliers().subscribe(suppliers => this.suppliers = suppliers);
  }
}
