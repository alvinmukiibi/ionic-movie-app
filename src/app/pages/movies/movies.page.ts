import { Observable } from "rxjs";
import { MovieService, SearchType } from "./../../services/movie.service";
import { Component, OnInit } from "@angular/core";

MovieService;
@Component({
  selector: "app-movies",
  templateUrl: "./movies.page.html",
  styleUrls: ["./movies.page.scss"],
})
export class MoviesPage implements OnInit {
  results: Observable<any>;
  searchTerm: string = "";
  type: SearchType = SearchType.all;

  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  searchChanged() {
    // call our service function which returns an observable
    this.results = this.movieService.searchData(this.searchTerm, this.type);
  }
}
