import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';
import {UserProfileService} from '../user-profile.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private userPrfile: UserProfileService, private route: ActivatedRoute,private cartService: CartService) { }

  ngOnInit() {
    
  this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
}
getShipping(){
  this.userPrfile.getUser();
}
addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}