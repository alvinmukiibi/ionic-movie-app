import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export enum SearchType {
  all = "",
  movie = "movie",
  series = "series",
  episode = "episode",
}

export class MovieService {
  url = "http://www.omdbapi.com/";
  apiKey = "a4b08741";

  constructor(private http: HttpClient) {}

  searchData(title: string, type: SearchType): Observable<any> {
    let api = `${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${
      this.apiKey
    }`;

    let result = this.http.get(api).pipe(map((res) => res["Search"]));

    return result;
  }

  getDetails(id) {
    let api = `${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`;

    let result = this.http.get(api);

    return result;
  }
}
