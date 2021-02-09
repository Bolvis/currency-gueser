import { Component, OnInit } from '@angular/core';
import {Currency, CurrencyClientService} from '../../services/currency-client.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  currency: Currency;
  result: string;

  constructor(private currencyClientService: CurrencyClientService) { }

  ngOnInit(): void {
    this.currencyClientService.getCurrency().subscribe( value => {
      this.currency = value;
    });
  }

  public check(value: number): void {
    const plnValue = parseFloat(this.currency.rates.PLN.toFixed(2));

    switch (true){
      case value > plnValue:
        this.result = 'za dużo :(';
        break;
      case value < plnValue:
        this.result = 'za mało :(';
        break;
      default:
        this.result = 'Gratulacje! :)';
        break;
    }
  }
}
