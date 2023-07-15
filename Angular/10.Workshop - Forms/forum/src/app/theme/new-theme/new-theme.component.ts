import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types/post';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css'],
})
export class NewThemeComponent {
  post: Post | undefined;
  constructor(
    private activatedRout: ActivatedRoute
  ) // private http: HttpClient,
  // private apiService: ApiService
  {}

  // create(title: string, content: string, author: string, text: string): void {
  //   this.apiService.createPost();
  // }

  // ngOnInit() {
  //   const { appUrl } = environment;

  //   this.http
  //     .post<Post>(`${appUrl}/themes`, {
  //       themeName: 'Angular POST Request Example',
  //     })
  //     .subscribe((data) => {
  //       this.post = data;
  //     });
  // }
}
