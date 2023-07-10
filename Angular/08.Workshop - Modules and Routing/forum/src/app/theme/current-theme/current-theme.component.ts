import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css'],
})
export class CurrentThemeComponent implements OnInit {
  theme: Theme | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // const id = this.activatedRoute.snapshot.params['themeId'];
    // this.apiService.getTheme(id).subscribe((theme) => {
    //   this.theme = theme;
    //   console.log({ theme });
    // });
    this.fetchTheme();
  }

  fetchTheme(): void {
    const id = this.activatedRoute.snapshot.params['themeId'];
    this.apiService.getTheme(id).subscribe((theme) => {
      this.theme = theme;
      console.log({ theme });
    });
  }
}
