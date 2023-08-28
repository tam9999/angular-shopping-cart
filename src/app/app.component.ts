import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { PromoCode } from './promo-code.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Iphone 15',
      description: 'Description for product iphone 15',
      thumbnail: '/assets/iphone.jpeg',
      price: 23000000,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Iphone 14',
      description: 'Description for product iphone 14',
      thumbnail: '/assets/iphones.jpeg',
      price: 15000000,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Iphone 14 vs 15',
      description: 'Description for product iphone 14',
      thumbnail: '/assets/iphones.jpeg',
      price: 17500000,
      quantity: 2,
    },
  ];
  
  promoCodes: PromoCode[] = [
    {
      code: 'AUTUMN',
      discountPercent: 10
    },
    {
      code: 'WINTER',
      discountPercent: 20
    }
  ];

  numberItems: number = 0;
  subTotal: number = 0;
  discountPercent: number = 0;
  discount: number = 0;
  taxPercent: number = 10;
  tax: number = 0;

  ngDoCheck() {
    this.numberItems = 0;
    this.subTotal = 0;

    for (const product of this.products) {
      this.numberItems += product.quantity;
      this.subTotal += product.price * product.quantity;
    }

    this.discount = (this.subTotal * this.discountPercent) / 100;
    this.tax = ((this.subTotal - this.discount) * this.taxPercent) / 100;
  }

  handleUpdateQuantity(p: { id: number; quantity: number }) {
    const product = this.products.find(product => product.id === p.id);
    if (product) {
      product.quantity = p.quantity || 0;
    }
  }

  handleRemoveProduct(id: number) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    let numberItems = 0;
    let subTotal = 0;
    for(const product of this.products){
      numberItems += product.quantity;
      subTotal += product.price * product.quantity;
    }
    this.numberItems = numberItems;
    this.subTotal = subTotal;
  }

  handleApplyPromoCode(code: any) {
    const promoCode = this.promoCodes.find(
      promoCode => promoCode.code === code
    );
    this.discountPercent = promoCode ? promoCode.discountPercent : 0;
    this.discount = (this.subTotal * this.discountPercent) / 100;

    if (this.discount > 0) {
      alert(`The promotional code was applied.`);
    } else {
      alert(
        'Sorry, the promotional code you entered is not valid! Try code "AUTUMN" (discount 10% to all cart items) or "WINTER" (discount 20% to all cart items).'
      );
    }
  }
}
