import { Component,ViewChild } from '@angular/core';
import { MoviesService } from '../../service/movies.service';
import { searchObj } from '../../interface';
import { SearchComponent } from '../../components/search/search.component'
@Component({
  selector: 'upcoming-movies', // 组件名
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
  providers: [MoviesService]
})
export class UpcomingMovies {
  searchStr: string;
  movieType:string;
  showSearch:boolean;
  topRatedMovies: Array<Object>;
  searchLists:Array<Object>;

  constructor(private http: MoviesService) { }
  init():void{
    this.movieType = "upcoming";
    this.searchLists = [];
    // 初始化获取搜索历史
    this.getSearchHistory();
    this.getTopRated();
  }

  // 使用@ViewChild获取子组件的引用,在父组件中调用子组件的方法 
  // @ViewChild(子组件名称)  随便命名:子组件名称
  @ViewChild(SearchComponent) searchCom: SearchComponent;
  // 获取搜索历史
  getSearchHistory() {
    //调用子组件方法
    const { showSearch } = this.searchCom.getSearchHistory();
    if(!showSearch || showSearch === undefined) return;
    this.showSearch = showSearch;
  }

  ngOnInit() {
    //http请求
    this.init();
  }

  // 获取最新电影
  getTopRated():void{
    const topRatedMovies = JSON.parse(sessionStorage.getItem("topRatedMovies"));
    if(!topRatedMovies){
      this.http.getTopRatedMovies().subscribe(res => {
        this.topRatedMovies = res.results;  //顶级影片
        // 存到 sessionStorage 中，下次进来直接取
        sessionStorage.setItem("topRatedMovies",JSON.stringify(res.results));
      });
    }else{
      this.topRatedMovies = topRatedMovies;
    }
  }

  // 搜索方法
  searchMovies(datas: searchObj): void {
    const { showSearch } = datas;
    this.showSearch = showSearch;
  }
}
