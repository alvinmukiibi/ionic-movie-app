import { MovieService } from "./../../services/movie.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.page.html",
  styleUrls: ["./movie-details.page.scss"],
})
export class MovieDetailsPage implements OnInit {
  information = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    // get the ID that was passed with the URL

    let id = this.activatedRoute.snapshot.paramMap.get("id");

    this.movieService.getDetails(id).subscribe((res) => {
      this.information = res;
      console.log(res);
    });
  }

  openWebsite() {
    window.open(this.information.Website, "_blank");
  }
}
