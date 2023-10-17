import { Component } from '@angular/core';

interface ICommonProduct {
  price: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count = 0;
  private _products: ICommonProduct[] = [];
  
}
