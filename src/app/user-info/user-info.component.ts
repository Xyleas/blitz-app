import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserInfo } from './user-info.model';

@Component({
  selector: 'fm-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  myInfo: UserInfo | undefined
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("ending request to server");
    this.showUserInfo();
  }

  getUserInfo(){
    return this.http.get<UserInfo>('https://blitz-app-9e530-default-rtdb.firebaseio.com/.json');
  }

  showUserInfo(){
    this.getUserInfo().subscribe((data: UserInfo) => {
      console.log(data);
      this.myInfo = data;
    })
  }
}
