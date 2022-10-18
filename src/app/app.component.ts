import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post';
  POSTS: any;
  page:number = 1;
  count: number = 0;
  tablesize:number = 2;
  tablesizes:any = [5, 10, 15, 20 ];
  Detail: any;

  constructor( private api: ApiService ) { }

  ngOnInit() {
    this.postList();
    this.personalDetails();
  }

  postList(): void {
    this.api.getAllPosts().subscribe((res)=>{
      this.POSTS = res;
      console.log(this.POSTS)
    })
  }

  personalDetails(): void {
    this.api.getDetails().subscribe((res)=>{
      this.Detail = res;
      console.log( this.Detail)
    })
  }

  formData( event: any) {
    this.page = event;
    this.postList();
  }

  formSize(event: any): void{
    this.tablesize = event.target.value;
    this.page = 1;
    this.postList();

  }
}
