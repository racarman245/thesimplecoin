import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin-list',
  template: `
  <ul>
    <li *ngFor="let coin of coins">
      {{coin.name}}
    </li>
  </ul>
  `,
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {
    coins: Coin[] = [
    {id: 'bitcoin', name: 'bitcoin', symbol: 'BTC', price_usd: 19},
    {id: 'ethereum', name: 'ethereum', symbol: 'ETH', price_usd: 39},
    {id: 'litecoin', name: 'litecoin', symbol: 'LTC', price_usd: 334},
  ];

  constructor() { }

  ngOnInit() {
  }

}
