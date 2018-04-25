import { Injectable } from '@angular/core';
import { AuthService } from "./auth.service";
import {
    Router, Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';

@Injectable()
export class AuthResolveService implements Resolve<any> {

  constructor(private router: Router,private authService: AuthService) { }
    
    resolve(route: ActivatedRouteSnapshot): Promise<any> {
        return this.authService.isSignedIn().then((isSignedIn)=>{
          if(!isSignedIn){
              this.router.navigate(['login']);
              
          }
      });

    }

}
