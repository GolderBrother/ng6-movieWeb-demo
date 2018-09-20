import { Component } from '@angular/core';
import { MoviesService } from './service/movies.service';
import { PersonService } from './service/person.service'
interface Obj {
    id:number;
    name:string;
}
// const Arr:Obj[]=[
//      {id:1,name:'影片分类1'},
//      {id:2,name:'影片分类1'},
// ]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MoviesService,PersonService]
})
export class AppComponent {
  title = 'my-movies';
  genres:Obj;
 // genres = Arr;
  constructor(private http:MoviesService) {}
  // 一个生命周期钩子，它会在 Angular 初始化完了该指令的所有数据绑定属性之后调用
  ngOnInit(){
    //http请求
    this.http.getGenres().subscribe(res =>{
      console.log(res);
      this.genres = res.genres;
    })
  }
}
