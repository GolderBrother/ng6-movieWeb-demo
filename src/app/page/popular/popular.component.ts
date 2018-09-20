import { Component, ViewChild } from '@angular/core';
// 引入service服务
import { MoviesService } from '../../service/movies.service';
// 引入接口
import { searchObj } from '../../interface';
import { SearchComponent } from '../../components/search/search.component'
@Component({
  selector: 'popular-movies',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
  // 定义注入服务
  providers: [MoviesService]
})
export class PopularMovies {
  searchStr: string;
  movieType: string;
  showSearch: boolean;
  popularMovies: Array<Object>;
  constructor(private http: MoviesService) { }

  // 初始化数据
  init(): void {
    this.movieType = "popular";
    this.showSearch = false;
  }

  ngOnInit() {
    this.init();
    //http请求
    this.getPopular();
    // 初始化获取搜索历史
    this.getSearchHistory();
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

  // 获取流行电影
  getPopular(): void {
    const popularMovies = JSON.parse(sessionStorage.getItem("popularMovies"));
    if (!popularMovies) {
      this.http.getPopularMovies().subscribe(res => {
        this.popularMovies = res.results;  //流行影片 
        // 存到 sessionStorage 中，下次进来直接取
        sessionStorage.setItem("popularMovies", JSON.stringify(res.results));
      });
    } else {
      this.popularMovies = popularMovies;
    }
  }

  // 搜索方法
  searchMovies(datas: searchObj): void {
    const { showSearch } = datas;
    this.showSearch = showSearch;
  }
}
