// mars-weather.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MarsWeatherService {
    // URL del endpoint de la NASA
    private apiUrl = `https://api.nasa.gov/insight_weather/?api_key=${environment.nasaApiKey}&feedtype=json&ver=1.0`;

    constructor(private http: HttpClient) { }

    // Method to obtain the data
    getMarsWeather(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
}