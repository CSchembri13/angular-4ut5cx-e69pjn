import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = products;

  object_to_add = { id: 1, name: '', price: 1, description: '' };

  share() {
    window.alert('The product has been shared!');
  }

  onSubmit(data: any) {
    this.object_to_add = {
      id: products.length + 1,
      name: data.name,
      price: data.price,
      description: data.description,
    };
    console.warn(data);
    products.push(this.object_to_add);
  }
  onDelete(id: any) {
    alert(id);
    let index = this.products.findIndex((d) => d.id === id);
    this.products.splice(index, 1);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
