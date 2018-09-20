import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MoviesService} from '../../service/movies.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  person: Object;
  movies: Array<Object>;
  constructor(private http: MoviesService, private router: ActivatedRoute,) {

  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      // 获取演员详情
      this.http.getPersonDetail(id).subscribe(person => {
        console.log(person)
        this.person = person;
      });
      // 获取演员表
      this.http.getPersonCast(id).subscribe(res => {
        console.log(res)
        this.movies = res.cast;
      });
    })
  }

}
