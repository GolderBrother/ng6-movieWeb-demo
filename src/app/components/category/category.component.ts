import { Component,Input } from '@angular/core';


@Component({
    selector:'movie-category',
    templateUrl:'category.component.html',
    styleUrls:['./category.component.css']
})

export class MovieCategory {
    //获取父参数
    @Input() genres:Object; //object 对象   数据 
}