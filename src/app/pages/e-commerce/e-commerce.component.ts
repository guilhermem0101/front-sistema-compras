import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../service/suppliers.service';


@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent implements OnInit {
  suppliers: any;

  constructor(private supplierService: SupplierService) { }

  ngOnInit() {
    this.getSuppliers();
  }

  getSuppliers(): void {
    this.supplierService.getSuppliers().subscribe(suppliers => this.suppliers = suppliers);
  }
}
