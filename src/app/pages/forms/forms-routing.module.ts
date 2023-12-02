import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SupplierCreateComponent } from './supplier-create/supplier-create.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { ReceiptCreateComponent } from './receipt-create/receipt-create.component';
import { ProductCreateComponent } from './product-create/product-create.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'inputs',
        component: FormInputsComponent,
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
      },
      {
        path: 'datepicker',
        component: DatepickerComponent,
      },
      {
        path: 'supplier-create',
        component: SupplierCreateComponent,
      },
      {
        path: 'order-create',
        component: OrderCreateComponent,
      },
      {
        path: 'receipt-create',
        component: ReceiptCreateComponent,
      },
      {
        path: 'product-create',
        component: ProductCreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

