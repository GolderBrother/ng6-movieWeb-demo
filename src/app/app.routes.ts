import { Routes } from '@angular/router';
import { PopularMovies } from './page/popular/popular.component';//流行影片
import { UpcomingMovies } from './page/upcoming/upcoming.component';//最新影片
import { GenresMovies } from './page/genres/genres.component'; //分类
import { DetailComponent } from './page/detail/detail.component'; //详情
import { ActorComponent } from './page/actor/actor.component'; //作者

export const appRoutes: Routes = [
    // pathMatch：'full' 完全匹配
    {path: '', component: PopularMovies,pathMatch:'full'}, 
    {path: 'upcoming', component: UpcomingMovies},
    {path: 'popular', component: PopularMovies}, 
    {path: 'genres/:id/:name', component: GenresMovies}, 
    {path: 'movie/:id', component: DetailComponent}, 
    {path: 'actor/:id', component: ActorComponent}, 
];