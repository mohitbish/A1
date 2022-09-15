import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
import { NgForm } from '@angular/forms';
import { Userobj } from '../userobj';
import { Userpwd } from '../userpwd';
const BACKEND_URL = 'http://localhost:5501';
// for angular http methods

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Userpwd = { username: "k.su@griffith.edu.au", pwd: "666666"}
  Userobj = {userid:1,username:this.Userpwd.username, role:"superadmin"}
  constructor(private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  submit(){
    
  this.httpClient.post(BACKEND_URL + '/login', this.Userpwd,  httpOptions)
    .subscribe((data:any)=>{
      alert(JSON.stringify(this.Userpwd));

      if (data.ok){
        alert("correct");
        sessionStorage.setItem('userid', this.Userobj.userid.toString());
        sessionStorage.setItem('username', this.Userobj.username);
        sessionStorage.setItem('role', this.Userobj.role);
        this.httpClient.post<Userobj[]>(BACKEND_URL + '/login', this.Userobj,  httpOptions)
          .subscribe((m:any)=>{console.log(m[0]);});
        this.router.navigateByUrl("/account");
      }
      else { 
        alert("email or password incorrect");
      }

    });
    
  }

}
