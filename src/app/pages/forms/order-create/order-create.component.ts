import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../../service/order.service';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'ngx-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit {
  orderForm: FormGroup;
  products: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private ordersService: OrderService,
    private productsService: ProductService
  ) { }

  ngOnInit(): void {
    // Load product options
    this.productsService.getProduct().subscribe(
      response => {
        this.products = response.produtos;
      },
      error => {
        console.log(error);
      }
    );

    this.orderForm = this.formBuilder.group({
     
      product: ['', Validators.required] // New form control for the product
    });
  }


  onSubmit(): void {
    if (this.orderForm.valid) {
      this.ordersService.createOrder(this.orderForm.value).subscribe(
        response => {
          console.log(response);
          // Handle success here
        },
        error => {
          console.log(error);
          // Handle error here
        }
      );
    }
  }
}
