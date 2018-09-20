import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  //路由
import { MoviesService } from '../../service/movies.service';
import { Location } from '@angular/common';

@Component({
  selector: 'my-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [MoviesService]
})
export class DetailComponent {
  reviews: Array<Object>;
  movie: Object;
  cast: Array<Object>;
  similarMovies: Array<Object>;

  constructor(private router: ActivatedRoute,
    private http: MoviesService,
    private location: Location) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {  //路由传参
      const { id } = params;
      //电影基本信息 获取评论 获取演员表 获取推荐相似
      this.http.getMovie(id).subscribe(res => {
        console.log(res);
        this.movie = res;  //基本信息
      });
      //获取评论
      this.http.getMovieReviews(id).subscribe(res => {
        this.reviews = res.results;  //评论
      });
      //获取演员表
      this.http.getMovieCredits(id).subscribe(res => {
        console.log(res);
        this.cast = res.cast.slice(0, 4);  //演员表
      });
      //获取推荐相似
      this.http.getSimilarMovies(id).subscribe(res => {
        console.log(res.results);
        this.similarMovies = res.results.slice(0, 12);  //相似推荐
      });
    })
  }
  //返回 路由页面会刷新
  /**
   * description:保留我之前的搜索信息：存入本地存储(sessionStorage)，页面一进来就读取本地存储，有值就赋值请求数据，没有值就正常渲染
   * 或者存入浏览器的数据库:IndexedDB
   */
  goBack(): void {
    // 路由跳转:返回
    this.location.back();
  }

}
