import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id: number = 0
  type: string = ''
  url: string = ''
  constructor(private route: ActivatedRoute ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.type = this.route.snapshot.params['type']
    // if()
  }

}
