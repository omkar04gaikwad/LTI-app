import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from "./register.model";
import { DataService } from "../services/data.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = new Register();
  data: any;
  message: any;
  status: any;
  confirmpassword: any;
  isActiveArr = [
    {
      "key":"Yes",
      "value":"1"
    },
  ]
  constructor(
    private dataService: DataService,
    private httpClient: HttpClient,
    private route: Router
  ) { }

  ngOnInit(): void {
  }
  signup()
  {
    this.dataService.userdata(this.register).subscribe((res: any) => {
      this.data = res;
      this.status = res.status;
      if(this.status == 1){
        this.route.navigate(['/login']);
      }
      else{
        this.message = this.data.message;
      }
    })
  }
  login()
  {
    this.route.navigate(['/login']);
  }
}
