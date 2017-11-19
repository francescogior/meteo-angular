import { Injectable } from 'angular2/core';
import { Forecast } from './typings';

declare function fetch(any): Promise<any>

@Injectable()
export default class MeteoAPI {

  constructor() {}

  getForecast(inputValue: string): Promise<Forecast> {
    return fetch(`https://query.yahooapis.com/v1/public/yql?u=c&q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${inputValue}")&format=json&env=store://datatables.org/alltableswithkeys`)
      .then(rawData => rawData.json())
      .then(jsonData => jsonData.query ? (jsonData.query.results ? jsonData.query.results.channel : null ) : null)
      .then(content => content ? {
        condition: content.item.condition,
        location: content.location,
        forecast: content.item.forecast.slice(1, 6)
      } : null)
  }

}
