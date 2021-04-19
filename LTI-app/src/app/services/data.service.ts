import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  towerdata: any;
  resodata: any;
  respdata: any;
  statdata: any;
  exp:any;
  header = new HttpHeaders({
    'X-Access-Token' : localStorage.getItem('x-access-token')
  })
  constructor(
    private httpClient:HttpClient
  ) { }
  gettowerData()
    {
      return this.httpClient.get('http://127.0.0.1:5000/tower', {headers: this.header});
    }
    getresourceData()
    {
      return this.httpClient.get('http://127.0.0.1:5000/resource', {headers: this.header});
    }
    getresponData()
    {
      return this.httpClient.get('http://127.0.0.1:5000/responsible', {headers: this.header});
    }
    getstatusData()
    {
      return this.httpClient.get('http://127.0.0.1:5000/status', {headers: this.header});
    }
    getformdata()
    {
      return this.httpClient.get('http://127.0.0.1:5000/getdata', {headers: this.header});
    }
    getformdata1()
    {
      return this.httpClient.get('http://127.0.0.1:5000/getdata1', {headers: this.header});
    }
    downloaddata()
    {
      return this.httpClient.get('http://127.0.0.1:5000/download', {headers: this.header});
    }
    postformdata(data)
  {
    return this.httpClient.post('http://127.0.0.1:5000/createform', data, {headers: this.header});
  }
  userdata(data)
  {
    return this.httpClient.post('http://127.0.0.1:5000/createuser', data);
  }
  logindata(data)
  {
    return this.httpClient.post('http://127.0.0.1:5000/login', data);
  }
  updatedata(data)
  {
    return this.httpClient.post('http://127.0.0.1:5000/update', data, {headers: this.header});
  }
  deldata(data)
  {
    return this.httpClient.post('http://127.0.0.1:5000/delete', data, {headers: this.header});
  }
  toupdatedata(data)
  {
    return this.httpClient.post('http://127.0.0.1:5000/edit', data, {headers: this.header});
  }
  downloadFile(data, filename='data') {
        let csvData = this.ConvertToCSV(data, ['Activity_date','Activity_time','Details','Received_date','Received_time','Resource','Responsible','public_id','site','status','tasknumber','tower']);
        let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", filename + ".csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    }
ConvertToCSV(objArray, headerList) {
         let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
         let str = '';
         let row = 'id,';
for (let index in headerList) {
             row += headerList[index] + ',';
         }
         row = row.slice(0, -1);
         str += row + '\r\n';
         for (let i = 0; i < array.length; i++) {
             let line = (i+1)+'';
             for (let index in headerList) {
                let head = headerList[index];
line += ',' + array[i][head];
             }
             str += line + '\r\n';
         }
         return str;
     }


     gettoken(){
       this.exp = localStorage.getItem('exp')
       const date = new Date(0)
       date.setUTCSeconds(this.exp)
       if(date === undefined) return false;
       return !(date.valueOf() > new Date().valueOf());
     }
}
