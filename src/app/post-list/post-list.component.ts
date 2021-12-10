import { Component, OnInit } from '@angular/core';
import axios from 'axios';

import { Post } from './post'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts : Post[] = [
    {
      title: "Empty Title"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  

  async getPosts(): Promise<void> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    this.posts = response.data
    console.log(response)
    console.log(this.posts)
  }

}
