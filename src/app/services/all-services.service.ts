import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  constructor() { }
  login(username: string, pwd: string){
    if(username === "admin" && pwd === "admin"){
      return 200;
    }else{
      return 403; 
    }
  }
}
