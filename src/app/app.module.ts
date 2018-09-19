import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';  //Http请求
import { HttpModule, JsonpModule } from '@angular/http';  //jsonp

import { AppComponent } from './app.component';
import { MoviesComponent } from './page/movies/movies.component';  //movies组件
//import { UpcomingComponent } from './upcoming/upcoming.component';//UpcomingComponent
import { GenresComponent } from './page/genres/genres.component'; //分类
//import { MovieViewComponent } from './movie-view/movie-view.component'; //影片封装
import { appRoutes } from './app.routes';   //路由

// 引入公共组件
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { MovieCategory } from "./components/category/category.component";

// 引入公共模块
import {UpcomingModule} from './modules/upcoming/upcoming.module'; //最新电影模块
import {MovieViewModule} from './modules/movie-view/movie-view.module'; //封装模块

@NgModule({
  declarations: [   //自定义模块
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MovieCategory,
    MoviesComponent,
    //UpcomingComponent,
    GenresComponent,
    //MovieViewComponent
  ],
  imports: [     //系统模块
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    UpcomingModule,
    MovieViewModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]   //启动模块
})
export class AppModule { }
