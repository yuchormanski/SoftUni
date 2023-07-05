import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserServiceService
  ) {
    console.log(this.activeRoute.snapshot.data);

    this.activeRoute.params.subscribe((id) => console.log(id));
  }
  ngOnInit(): void {}
}
