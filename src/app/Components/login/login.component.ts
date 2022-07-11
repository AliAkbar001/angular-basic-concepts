import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllServicesService } from 'src/app/services/all-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string = ""
  password: string = ""
  errorMsg: string = ""
  constructor(private all_services: AllServicesService, private router: Router) { }

  ngOnInit(): void {
  }
login(){
  if(this.username.trim().length === 0){
    this.errorMsg = "Username is required"
  }else if(this.password.trim().length === 0){
    this.errorMsg = "Password is required"
  }else{
    this.errorMsg = ""
    let res = this.all_services.login(this.username, this.password)
    if(res === 200){
      this.router.navigate(['home'])
    }else{
      this.errorMsg = "Invalid username or password"
    }
  }
}
}
