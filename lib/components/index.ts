import { Component } from 'angular2/core';
import MeteoAPI from './service';
import { Forecast } from './typings';
import { FtoC } from '../utils';

@Component({
  selector: 'app',
  providers: [MeteoAPI],
  styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
  template: require('./index.html')
})
export class App {

  inputValue: string;
  forecast: Forecast;
  FtoC: (s: number) => number;

  constructor(public service:MeteoAPI) {
    this.inputValue = '';
    this.FtoC = FtoC;
  }

  getForecast() {
    this.service.getForecast(this.inputValue)
      .then((forecast: Forecast) => {
        console.log({ forecast })
          this.forecast = forecast;
      });
  }
}
