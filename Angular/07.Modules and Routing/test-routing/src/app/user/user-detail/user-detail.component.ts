import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  hasUser: boolean = false;
  currentUser: User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserServiceService
  ) {
    //static way
    console.log(this.activeRoute.snapshot.data);
    // console.log(this.activeRoute.snapshot.data['user']);  // само user обекта

    //dynamic way
    this.activeRoute.params.subscribe((data) => console.log(data));

    // this.activeRoute.params.subscribe((id) => console.log(id));
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.userService.getOne(id).subscribe((user) => {
      this.currentUser = user;
      this.hasUser = true;
    });
  }
}
