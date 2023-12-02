import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierService } from '../../../service/suppliers.service';


@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.scss']
})
export class SupplierCreateComponent implements OnInit {
  supplierForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private suppliersService: SupplierService
  ) { }

  ngOnInit(): void {
    this.supplierForm = this.formBuilder.group({
      Nome: ['', Validators.required],
      CNPJ: ['', Validators.required],
      razao_social: ['', Validators.required],
      // endereco: this.formBuilder.array([
      //   this.formBuilder.group({
      //     logradouro: ['', Validators.required],
      //     num: ['', Validators.required],
      //     bairro: ['', Validators.required],
      //     uf: ['', Validators.required],
      //     cep: ['', Validators.required]
      //   })
      // ]),
      // contatos: this.formBuilder.array([
      //   this.formBuilder.group({
      //     dd: ['', Validators.required],
      //     tel: ['', Validators.required],
      //     Email: ['', Validators.required]
      //   })
      // ]),
      servico: ['', Validators.required],
      //categorias: this.formBuilder.array(['', Validators.required]),
      // Status: ['', Validators.required]
    });
  }


  onSubmit(): void {
    if (this.supplierForm.valid) {
      this.suppliersService.createSupplier(this.supplierForm.value).subscribe(
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
