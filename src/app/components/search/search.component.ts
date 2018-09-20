import { Component, Input, Output, EventEmitter } from "@angular/core";
// 引入service服务
import { MoviesService } from '../../service/movies.service';
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    // 定义注入服务
    providers: [MoviesService]
})

export class SearchComponent {
    constructor(
        private http: MoviesService
    ) { }
    showSearch: boolean;
    searchLists: Array<Object>;
    //接收父组件传递过来的参数
    @Input() searchstring: string;
    @Input() searchtype: string;
    // 定义一个输出事件 传递搜索数据
    @Output() searchevent: EventEmitter<any> = new EventEmitter();
    // 从缓存中获取搜索历史
    @Output() searchhistory: EventEmitter<any> = new EventEmitter();
    ngOnInit() {
        this.init();
    }
    // 初始化数据
    init(): void {
        this.showSearch = false;
        this.searchLists = [];
        this.getSearchHistory();
    }
    // 获取搜索历史
    getSearchHistory() {
        const searchHistoryObj = JSON.parse(sessionStorage.getItem("searchHistory"));
        console.log(searchHistoryObj)
        if (!searchHistoryObj) {
            return {
                showSearch: false,
                list: []
            }
        };
        const { searchstring, showSearch, searchLists } = searchHistoryObj;
        this.searchstring = searchstring;
        this.searchLists = searchLists;
        this.showSearch = showSearch;
        return {
            showSearch: showSearch,
            list: searchLists
        };
    }
    search(): void {
        const { searchstring, searchtype } = this;
        // 搜索
        if (!searchstring) {
            // this.searchevent.emit({
            //     status: 0,
            //     list: [],
            //     msg: "search key empty"
            // });
            this.showSearch = false;
            this.searchLists = [];
            this.searchevent.emit({
                showSearch: this.showSearch,
                list: this.searchLists
            })
            sessionStorage.removeItem("searchHistory");
        } else {
            // popularity upcoming 
            // 注意：这是异步的 必须注意！！ 因此如果这一步的数据需要传递出去，必须写在回调函数里面，不能写在外面，比如if(){}else{} 外面
            this.http.searchMovies(searchstring, searchtype).subscribe(res => {
                // 子组件中通过emit将要传递出去的参数传递给父组件，父组件中就可以获取到
                // this.searchevent.emit({
                //     status: 1,
                //     list: res.results,
                //     msg: "success"
                // })
                this.showSearch = true;
                this.searchLists = res.results;
                const { showSearch, searchLists } = this;
                this.searchevent.emit({
                    showSearch: showSearch,
                    list: searchLists
                });
                const searchHistoryObj = {
                    searchstring,
                    showSearch,
                    searchLists
                };
                sessionStorage.setItem("searchHistory", JSON.stringify(searchHistoryObj));
            })

        };
    }
}
