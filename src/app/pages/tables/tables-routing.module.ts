import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { SupplierComponent } from './supplier/supplier.component';
import { OrderComponent } from './order/order.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'smart-table',
      component: SmartTableComponent,
    },
    {
      path: 'tree-grid',
      component: TreeGridComponent,
    },
    {
      path: 'supplier-table',
      component: SupplierComponent,
    },
    {
      path: 'order-table',
      component: OrderComponent,
    },
    {
      path: 'receipt-table',
      component: ReceiptComponent,
    },
    {
      path: 'product-table',
      component: ProductComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  TreeGridComponent,
];
