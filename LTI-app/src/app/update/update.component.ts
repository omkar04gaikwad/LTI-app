import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../services/data.service";
import { Update } from "./update.model";
import { HttpClient } from '@angular/common/http';
import { WeeklyComponent } from '../weekly/weekly.component';
import jwt_decode from "jwt-decode";
import { Router } from "@angular/router";
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  formid: any;
  data:any;
  dataArr:any;
  resoArr:any;
  respArr:any;
  statArr:any;
  formArr:any;
  token: any;
  id: any;
  public_id: any;
  updates: any;
  update = new Update();
  datafs: any;
  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private dataService:DataService,
    private routes: Router
  ) { }

  ngOnInit(): void {
    this.formid=this.route.snapshot.params.id;
    this.update.id = this.formid;
    this.gettowerdata();
    this.getresourcedata();
    this.getrespondata();
    this.getstatusdata();
    this.token = localStorage.getItem('x-access-token');
      this.id = jwt_decode(this.token);
      this.public_id = this.id.id;
    this.update.public_id = this.public_id;

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

  getupdatedata()
  {
    this.dataService.updatedata(this.update).subscribe(res =>{
    })
    this.routes.navigate(['/getdata'])
  }
}
