import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../../service/suppliers.service';
import { LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'ngx-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      Nome: {
        title: 'Nome',
        type: 'string',
      },
      endereco: {
        title: 'Endereço',
        type: 'string',
        valuePrepareFunction: (endereco) => {
          return endereco[0].logradouro;
        }
      },
      contatos: {
        title: 'Contato',
        type: 'string',
        valuePrepareFunction: (contatos) => {
          return contatos[0].Email;
        }
      },
      Status: {
        title: 'Status',
        type: 'string',
      },
    },

  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private suppliersService: SupplierService) {
   
  }

  ngOnInit() {
    this.suppliersService.getSuppliers().subscribe(
      data => {
        this.source.load(data);
      },
      error => {
        console.error(error);
      }
    );
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
