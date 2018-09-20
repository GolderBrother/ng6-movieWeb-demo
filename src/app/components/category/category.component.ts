import { Component,Input } from '@angular/core';


@Component({
    selector:'movie-category',
    templateUrl:'category.component.html',
    styleUrls:['./category.component.css']
})

export class MovieCategory {
    // 声明一个可供数据绑定的输入属性 接收父组件传递过来的数据
    @Input() genres:Object; //object 对象    
}