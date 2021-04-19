import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from "./login.model";
import { DataService } from "../services/data.service";
import { Router } from "@angular/router";
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new Login();
  data: any;
  message: any;
  status: any;
  token: any;
  id: any;
  tokens;
  constructor(
    private dataService: DataService,
    private httpClient: HttpClient,
    private route: Router
  ) { }

  ngOnInit(): void {
  }
  loginit()
  {
    this.dataService.logindata(this.login).subscribe((res: any)=>{
      this.data = res;
      this.status = res.status;
      if(this.status == 1){
        this.token = this.data.token;
        localStorage.setItem('x-access-token',this.token);
        this.tokens = localStorage.getItem('x-access-token');
          this.id = jwt_decode(this.token);
        localStorage.setItem('exp',this.id.exp)
        this.route.navigate(['/getdata']);
      }
      else{
        this.message = this.data.message;
      }
    })
  }
  gosignup(){
    this.route.navigate(['/register'])
  }
}
