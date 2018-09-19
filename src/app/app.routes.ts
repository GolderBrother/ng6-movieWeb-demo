import { Routes } from '@angular/router';
import { MoviesComponent } from './page/movies/movies.component';//顶级影片
import { UpcomingComponent } from './modules/upcoming/upcoming.component';//最新影片
import { GenresComponent } from './page/genres/genres.component'; //分类
import { DetailComponent } from './page/detail/detail.component'; //详情
import { ActorComponent } from './page/actor/actor.component'; //作者

export const appRoutes: Routes = [
    // pathMatch：'full' 完全匹配
    {path: '', component: MoviesComponent,pathMatch:'full'}, 
    {path: 'upcoming', component: UpcomingComponent},
    {path: 'popular', component: MoviesComponent}, 
    {path: 'genres/:id/:name', component: GenresComponent}, 
    {path: 'movie/:id', component: DetailComponent}, 
    {path: 'actor/:id', component: ActorComponent}, 
];