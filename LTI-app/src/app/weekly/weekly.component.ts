import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { Weeklytrack } from "./weeklytrack.model";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import jwt_decode from "jwt-decode";
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {
  data:any;
  dataArr:any;
  resoArr:any;
  respArr:any;
  statArr:any;
  formArr:any;
  token: any;
  id: any;
  public_id: any;
  weeklytrack= new Weeklytrack();
  constructor(
    private dataService:DataService,
    private httpClient: HttpClient,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.gettowerdata();
    this.getresourcedata();
    this.getrespondata();
    this.getstatusdata();
    this.token = localStorage.getItem('x-access-token');
      this.id = jwt_decode(this.token);
      this.public_id = this.id.id;
    this.weeklytrack.public_id = this.public_id;

  }
  gettowerdata()
{
  this.dataService.gettowerData().subscribe(res=>{
    this.dataArr=res;
  })
}
getresourcedata()
{
  this.dataService.getresourceData().subscribe(res=>{
    this.resoArr=res;

  })
}
getrespondata()
{
  this.dataService.getresponData().subscribe(res=>{
    this.respArr=res;
  })
}
getstatusdata()
{
  this.dataService.getstatusData().subscribe(res=>{
    this.statArr=res;
  })
}

onSubmit()
{
  this.dataService.postformdata(this.weeklytrack).subscribe((res: any) => {
    console.log(res)
  })
this.route.navigate(['/getdata'])
}
}
