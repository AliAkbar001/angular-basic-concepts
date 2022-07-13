import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingMovies : any;
  theatreMovies : any;
  popularMovies : any;
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheaterMovies();
    this.getPopularMovies();
  }
  getPopularMovies(){
    this.http.get("http://localhost:4200/assets/data/popular-movies.json").subscribe((movies)=>{
      this.popularMovies = movies
    })
  }
  getTheaterMovies(){
    this.http.get("http://localhost:4200/assets/data/theatre-movies.json").subscribe((movies)=>{
      this.theatreMovies = movies
    })
  }
  getTrendingMovies(){
    this.http.get("http://localhost:4200/assets/data/trending-movies.json").subscribe((movies)=>{
      this.trendingMovies = movies
    })
  }
  goToMovie(id: number, type: string){
    this.route.navigate(["movie", type, id])
  }
}
