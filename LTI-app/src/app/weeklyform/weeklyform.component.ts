import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-weeklyform',
  templateUrl: './weeklyform.component.html',
  styleUrls: ['./weeklyform.component.css']
})
export class WeeklyformComponent implements OnInit {
  formdataArr: any;
  message: any;
  formid: any;
  headers = new HttpHeaders();
  header:any;
  token: any;
  dataArr: any;
  exp: any;
  iat: any;
  now: any;
  exps: any;
  constructor(
    private dataService:DataService,
    private httpClient: HttpClient,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.getformdata();
    if (!localStorage.getItem('foo')) {
    localStorage.setItem('foo', 'no reload')
    location.reload()
  } else {
    localStorage.removeItem('foo')
  }
  this.exportdata()
  }
  getformdata()
  {
    this.dataService.getformdata().subscribe(res =>{
      this.formdataArr=res;
    })
  }
  getformdata1()
  {
    this.dataService.getformdata1().subscribe(res =>{
      this.formdataArr=res;
      console.log(this.formdataArr);
    })
  }
  Addactivity()
  {
    this.route.navigate(['/createform']);
  }
  exportdata()
  {
    this.dataService.downloaddata().subscribe(res=>{
      this.dataArr=res;
    })
  }
  download()
  {
    this.dataService.downloadFile(this.dataArr, 'formdata')
  }
  logout()
  {
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('exp');
    this.route.navigate(['/login']);
  }
  deletedata(id)
  {
    this.dataService.deldata(id).subscribe(res =>{})
    console.log('Deleted Successfully');
    window.location.reload();
  }
}
