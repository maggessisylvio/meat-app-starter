import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { MEAT_API } from "app/app.api";
import { Restaurant } from "app/models/restaurant.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
@Injectable()
export class RestaurantsServices {

    constructor(private http: Http) { }

    getRestaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json());
    }
}