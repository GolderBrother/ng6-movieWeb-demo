import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  //路由
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'my-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css'],
  providers:[MoviesService]
})
export class GenresMovies {
  genresName:string;
  movies:Array<Object>;

  constructor(private router:ActivatedRoute,
              private http:MoviesService) {}

  ngOnInit(){
    this.router.params.subscribe((params) => {  //路由传参
      const id = params['id'];
      this.genresName = params['name'];
      //http请求
      this.http.getMoviesByGenre(id).subscribe(res =>{
        console.log(res);
        this.movies = res.results;
      })
    })
  }
  //搜索方法
  searchMovies() {

  }

}
