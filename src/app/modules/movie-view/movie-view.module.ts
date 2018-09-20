import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  //公共组件
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from '../../app.routes';   //路由

// 将影片、电影详情、演员等组件放到电影子模块中，最后再将电影子模块放到app.module.ts大模块中
import { MovieViewComponent } from './movie-view.component'; //影片封装
import { DetailComponent } from '../../page/detail/detail.component'; //电影详情
import { ActorComponent } from '../../page/actor/actor.component'; //演员

@NgModule({
  declarations: [   //自定义模块 相当于把这些组件都放到模块中，就不用每个在app.module.ts中引用
    MovieViewComponent, 
    DetailComponent,
    ActorComponent
  ],
  imports: [     //系统模块
    BrowserModule,
    RouterModule.forRoot(appRoutes) //创建了模块后，就需要重新引用（app引用的,子模块也需要引用）
    //FormsModule
  ],
  exports:[   //导出模块，如果允许其它模块访问就需要导出
      CommonModule,  //公共模块
      MovieViewComponent //公共组件
  ],
  providers: [],
  //bootstrap: [AppComponent]   //启动模块
})
export class MovieViewModule { }
