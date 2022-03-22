import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { ShoppingCartService } from '../../services/shopping-card.service';


@Component({
    selector: 'app-cart',
    template: `
    <ng-container *ngIf="{ total: total$ | async, quantity: quantity$ | async } as dataCart">
        <mat-icon>add_shopping_cart</mat-icon>
        {{dataCart.total | currency}}
        ({{dataCart.quantity}})
    </ng-container>
    `
})

export class CartComponent {
    quantity$ = this.shoppingCartSvc.quantityAction$;
    total$ = this.shoppingCartSvc.totalAction$;
    constructor(private shoppingCartSvc: ShoppingCartService) { }
}
