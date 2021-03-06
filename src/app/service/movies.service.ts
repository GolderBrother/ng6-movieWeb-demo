import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import config from "../config";
import 'rxjs/Rx';
//URLSearchParams 用于处理URL中查询的字符串
//rxjs 适用于异步场景，交互接口请求/事件。。。

// @Injectable 装饰器是定义每个 Angular 服务时的必备部分
@Injectable()
export class MoviesService {
  apikey: string;

  constructor(private _jsonp: Jsonp) {
    this.apikey = config.API_KEY;
  }
  //获取分类
  public getGenres() {
    var search = new URLSearchParams();
    search.set('language', 'en-US');
    search.set('api_key', this.apikey);
    //return this._jsonp.get('https://api.themoviedb.org/3/genre/movie/list?callback=JSONP_CALLBACK'+'&language=en-US'+'&'+'api_key'+this.apikey)
    return this._jsonp.get(`${config.API_URL}/3/genre/movie/list?callback=JSONP_CALLBACK`, { search })
      .map(res => {
        return res.json();
      })
  }

  //获取分类详情
  public getMoviesByGenre(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get(`${config.API_URL}/3/genre/${id}/movies?callback=JSONP_CALLBACK`, { search })
      .map(res => {
        return res.json();
      })
  }

  //顶级(最新)电影
  public getTopRatedMovies() {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get(`${config.API_URL}/3/movie/top_rated?callback=JSONP_CALLBACK`, { search })
      .map(res => {
        return res.json();
      })
  }

  //流行电影
  public getPopularMovies() {
    let search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get(`${config.API_URL}/3/movie/popular?callback=JSONP_CALLBACK`, { search }).map(res => {
      console.log(res)
      return res.json();
    })
  }

  //搜索影片
  public searchMovies(searchStr: string, searchType: string) {
    var search = new URLSearchParams();
    search.set('sort_by', `${searchType}.desc`);
    search.set('query', searchStr);
    search.set('api_key', this.apikey);
    return this._jsonp.get(`${config.API_URL}/3/search/movie?callback=JSONP_CALLBACK`, { search })
      .map(res => {
        return res.json();
      })
  }
  //电影基本信息 
  getMovie(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get(`${config.API_URL}/3/movie/${id}?callback=JSONP_CALLBACK`, { search })
      .map(res => {
        return res.json();
      })
  }
  //获取评论 
  getMovieReviews(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get(`${config.API_URL}/3/movie/${id}/reviews?callback=JSONP_CALLBACK`, { search })
      .map(res => {
        return res.json();
      })
  }
  //获取演员表
  getMovieCredits(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get(`${config.API_URL}/3/movie/${id}/credits?callback=JSONP_CALLBACK`, { search })
      .map(res => {
        return res.json();
      })
  }
  //获取推荐相似
  getSimilarMovies(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get(`${config.API_URL}/3/movie/${id}/similar?callback=JSONP_CALLBACK`, { search })
      .map(res => {
        return res.json();
      })
  }
  //获取演员详情
  getPersonDetail(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get(`${config.API_URL}/3/person/${id}?callback=JSONP_CALLBACK`, { search })
      .map(res => {
        return res.json();
      })
  }
  // 获取相关演员
  getPersonCast(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get(`${config.API_URL}/3/person/${id}/movie_credits?callback=JSONP_CALLBACK`, { search })
      .map(res => {
        return res.json();
      })
  }
}