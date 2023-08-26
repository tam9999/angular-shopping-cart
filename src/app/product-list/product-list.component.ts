import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
products = [
  {
    name: 'Iphone 15',
    description: 'Description for product iphone 15',
    thumbnail: '/assets/iphone.jpeg',
    price: 5.99,
    quantity: 1
  },
  {
    name: 'Iphone 14',
    description: 'Description for product iphone 14',
    thumbnail: '/assets/iphones.jpeg',
    price: 9.99,
    quantity: 1
  },
  {
    name: 'Iphone 14 vs 15',
    description: 'Description for product iphone 14',
    thumbnail: '/assets/iphones.jpeg',
    price: 9.99,
    quantity: 2
  }
]
}
