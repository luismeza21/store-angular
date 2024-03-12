import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-top-seller',
  templateUrl: './top-seller.component.html',
  styleUrls: ['./top-seller.component.scss']
})
export class TopSellerComponent implements OnInit{

  


  products: Product[] = [
    {
      image: '../../../../assets/products/product1.png',
      name: 'Peluche Protozoario',
      description: 'Este es un producto de prueba con una descripción detallada.',
      rating: 4.2,
      price: 120000,
      discount: 5,
      votes: 1,
      quantity: 0
    },
    {
      image: '../../../../assets/products/product2.png',
      name: 'Producto 2',
      description: 'Otro producto de prueba con una descripción diferente.',
      rating: 3.7,
      price: 250000,
      votes: 3,
      quantity: 0
    },
    {
      image: '../../../../assets/products/product1.png',
      name: 'Peluche Protozoario',
      description: 'Este es un producto de prueba con una descripción detallada.',
      rating: 4.2,
      price: 120000,
      discount: 5,
      votes: 1,
      quantity: 0
    },
  
    {
      image: '../../../../assets/products/product2.png',
      name: 'Producto 3',
      description: 'Un tercer producto para ilustrar el uso del array.',
      rating: 4.8,
      price: 80000,
      votes: 4,
      quantity: 0
    }
  ];

  ngOnInit(): void{
    this.products.forEach(product =>  product.quantity ==0);
  }

  incrementQuantity(product: Product) {
    product.quantity++;
  }

  decrementQuantity(product: Product) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  currentIndex = 0;
  constructor() {
    
  }


  prev(): void {
    this.currentIndex = (this.currentIndex - 1) % this.products.length;
    this.scrollToCard();
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.products.length;
    this.scrollToCard();
  }
  scrollToCard(): void {
    const scrollPosition = this.currentIndex * 200;
    
  }
}
