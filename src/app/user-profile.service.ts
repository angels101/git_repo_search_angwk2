import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private username:string;
  private client_id = "4b1a2fadefdfd945db5d";
  private client_secret ="d1c3716ce71eeab26a8f8b5aa9f090638b129cce";
  
  constructor(private http: HttpClient) { 
    this.username = "";
  }

  getUserInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret);
  }

  getRepo(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.client_id + "&client_secret=" + this.client_secret);
  }
  
  updateProfile(username:string){
    this.username = username;
  }

}
