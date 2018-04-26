import { Component,OnInit } from '@angular/core';
import {
    Router, Resolve,Event,
    ActivatedRouteSnapshot,NavigationStart
} from '@angular/router';
import { WindowRefService } from './services/window-ref.service';
import { AuthService } from "./services/auth.service";
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
    constructor(private router: Router,
                 private authService: AuthService,
               private winRef: WindowRefService,) {
        
    }
    
    ngOnInit(): void{
        this.router.events.subscribe((event:Event) => {
            if(event instanceof NavigationStart) {
                this.authService.isSignedIn().then((data)=>{
                    console.log('Native window obj', this.winRef.nativeWindow.gapi);
                    if(!data){
                        this.router.navigate(['login']);
                    }
                });
            }
        });
    }
    
    openNav():void{
        $('#myNav').css("width","100%");
    }
    
    
}
