import { Component, OnInit, ChangeDetectorRef,TemplateRef,ElementRef,ViewChild } from '@angular/core';
import { TaskListService } from "../../services/task-list.service";
import { TaskService } from "../../services/task.service";
import * as $ from 'jquery';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {
    Router, Resolve,Event,ActivatedRoute,
    ActivatedRouteSnapshot,NavigationStart
} from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

    modalRef: BsModalRef;
    tasks:any[]=[];
    pendingTasks:any[]=[];
    completedTasks:any[]=[];
    addTaskEditMode:boolean=false;
    addTaskText:string="";
    defaultTaskList:any;
    selectedTask:any;
    crudOperationInProgress:boolean=false;
    taskCatagoryExist:boolean=false;
    loadingTask:boolean=false;
    loadingFirstTime:boolean=true;
    
    @ViewChild('addInputField') addInputFieldEl:ElementRef;
    
    
  constructor(private cdr:ChangeDetectorRef,
               private taskListService:TaskListService,
              private taskService:TaskService,
              private modalService: BsModalService,
               private route: ActivatedRoute) {
      
      this.route.params.subscribe( params => {
          console.log(params);
          if(params.id){
              this.defaultTaskList={
                  id:params.id,
                  title:''
              };
              this.taskCatagoryExist=true;
          }
          this.getFirstTaskList();
      }); 
  }

  ngOnInit() {
      //this.getFirstTaskList();
  }
    
    addTask(){
        if(this.addTaskText.length>0){
            if(!this.crudOperationInProgress){
                this.addTaskEditMode=false;
                this.crudOperationInProgress=true;
                this.loadingTask=true;
                var data={
                    title:this.addTaskText
                };
                this.taskService.insert(this.defaultTaskList.id,data).then((response:any)=>{
                    this.crudOperationInProgress=false;
                    this.addTaskText="";
                    this.getTasks()
                });
            }
        }else{
            this.addTaskEditMode=false;
        }
    }
    
    editTask(data){
        if(!this.crudOperationInProgress){
            data.editMode=false;
            this.crudOperationInProgress=true;
            this.loadingTask=true;
            this.taskService.update(this.defaultTaskList.id,data).then((response:any)=>{
                this.crudOperationInProgress=false;
                this.getTasks();
            });
        }
    }
    
    getFirstTaskList(){
        this.loadingFirstTime=true;
        if(this.taskCatagoryExist){
            this.taskListService.get(this.defaultTaskList.id).then((response:any)=>{
                this.defaultTaskList=response.result;
                this.loadingFirstTime=false;
                this.getTasks();
            });
        }else{
            this.taskListService.get().then((response:any)=>{
                this.defaultTaskList=response.result.items[0];
                var taskList=response.result.items[0];
                this.loadingFirstTime=false;
                this.getTasks();
            });
        }
    }
    
    getTasks(){
        
        this.tasks=[];
        this.completedTasks=[];
        this.pendingTasks=[];
        this.loadingTask=true;
        this.taskService.get(this.defaultTaskList.id).then((response:any)=>{
            if(response.result.items){
                this.tasks=response.result.items;
                this.tasks.forEach((task)=>{
                    if(task.status=="completed"){
                        this.completedTasks.push(task);
                    }else if(task.status=="needsAction"){
                        this.pendingTasks.push(task);
                    }
                });
            }
            this.loadingTask=false;
        });
    }

    openNav() {
        $("#mySidenav").css("width","350px");
        //$(".todoContainer").css("margin-left","250px");
        //$(".todoContainer").css("opacity","0.4");
}

 closeNav() {
    $("#mySidenav").css("width","0px");
    //$(".todoContainer").css("margin-left","0px");
    //$(".todoContainer").css("opacity","1");
}
    toggle(id){
        $('#'+id).toggle();
    }
    focusInput(){
        setTimeout(()=>{
            this.addInputFieldEl.nativeElement.focus();
        }, 1);
    }
    
    completeTask(data){
        if(data.check){
            data.status="completed";
            this.loadingTask=true;
            this.taskService.update(this.defaultTaskList.id,data).then((response:any)=>{
                this.getTasks();
            })
        }
    }
    
    deleteTask(template: TemplateRef<any>,data){
        this.selectedTask=data;
     this.modalRef = this.modalService.show(template, {class: 'modal-sm'});   
    }
    confirmDelete(): void {
        this.modalRef.hide();
        this.loadingTask=true;
        this.taskService.delete(this.defaultTaskList.id,this.selectedTask).then((response:any)=>{
            this.getTasks();
        });
    }
    
    declineDelete(): void {
        this.modalRef.hide();
    }
    
//    getDiferenceInDays(date : string) : string {
//        var theDate=new Date(date);
//        var dayDiff=Math.floor((new Date().getTime() - theDate.getTime()) / (1000 * 60 * 60 * 24));
//        if(dayDiff>1){
//            return dayDiff+" days ago";
//        }else if(dayDiff==1){
//            return "one day ago";
//        }else{
//            var minDiff=Math.floor((new Date().getTime() - theDate.getTime()) / (1000 * 60 * 60 ));
//            
//            if(minDiff>=1){
//                return minDiff+" min ago";
//            }else{
//                return "just now";
//            }
//        }
//    }
}
