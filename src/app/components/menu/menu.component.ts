import { Component, OnInit } from '@angular/core';
import {
    Router, Resolve,Event,
    ActivatedRouteSnapshot,NavigationStart
} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
    
    closeNav():void{
        $('#myNav').css("width","0%");
    }
    
    redirectHome(){
        $('#myNav').css("width","0%");
        this.router.navigate(['home']);
    }
    
    redirectTaskList(){
        $('#myNav').css("width","0%");
        this.router.navigate(['tasklist']);
    }
}
