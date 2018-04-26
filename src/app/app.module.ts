import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskListsComponent } from './components/task-lists/task-lists.component';

import { AppService } from './services/app.service';
import { TaskService } from './services/task.service';
import { TaskListService } from './services/task-list.service';
import { WindowRefService } from './services/window-ref.service';
import { GoogleApiService } from './services/google-api.service';
import { AuthService } from "./services/auth.service";
import { AuthResolveService } from './services/auth-resolve.service';
import { ToastService } from './services/toast.service';

import { ModalModule } from 'ngx-bootstrap';
import { MenuComponent } from './components/menu/menu.component';
import { LoaderComponent } from './components/loader/loader.component';

const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/login', 
        pathMatch: 'full'
    },
    {
      path: 'home',
      component: TasksComponent,
        resolve: {
          data: AuthResolveService
        }
    },{
      path: 'tasklist/:id/tasks',
      component: TasksComponent,
        resolve: {
          data: AuthResolveService
        }
    },{
      path: 'tasklist',
      component: TaskListsComponent,
        resolve: {
          data: AuthResolveService
        }
    },
    {
      path: 'login',
      component: LoginComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    TaskListsComponent,
    MenuComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
      CommonModule,
      HttpModule,
      FormsModule,
      RouterModule.forRoot(routes),
      ModalModule.forRoot()
  ],
  providers: [
      AppService,
      WindowRefService,
      GoogleApiService,
      AuthService,
      AuthResolveService,
      ToastService,
      TaskService,
      TaskListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
