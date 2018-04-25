import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import {
    Router, Resolve,Event,
    ActivatedRouteSnapshot,NavigationStart
} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit() {
      this.authService.isSignedIn().then((isSignedIn)=>{
          if(isSignedIn){
              this.router.navigate(['home']);
          }
      });
  }
    
    login(){
        this.authService.signIn().then((data:any)=>{
            this.authService.listen((isSignedIn:any)=>{
                console.log("isSignedIn = "+isSignedIn);
                if(isSignedIn){
                    this.router.navigate(['home']);
                }
            });
        });
    }

}
