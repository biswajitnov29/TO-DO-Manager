import { Component, OnInit, ChangeDetectorRef,TemplateRef } from '@angular/core';
import { TaskListService } from "../../services/task-list.service";
import { TaskService } from "../../services/task.service";
import * as $ from 'jquery';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-default-tasks',
  templateUrl: './default-tasks.component.html',
  styleUrls: ['./default-tasks.component.css']
})
export class DefaultTasksComponent implements OnInit {

    modalRef: BsModalRef;
    tasks:any[]=[];
    pendingTasks:any[]=[];
    completedTasks:any[]=[];
    addTaskEditMode:boolean=false;
    addTaskText:string="";
    defaultTaskList:any;
    selectedTask:any;
    crudOperationInProgress:boolean=false;
  constructor(private cdr:ChangeDetectorRef,
               private taskListService:TaskListService,
              private taskService:TaskService,
              private modalService: BsModalService) { }

  ngOnInit() {
      this.getFirstTaskList();
  }
    
    addTask(){
        if(!this.crudOperationInProgress){
            this.addTaskEditMode=false;
            this.crudOperationInProgress=true;
            var data={
                title:this.addTaskText
            };
            this.taskService.insert(this.defaultTaskList.id,data).then((response:any)=>{
                this.crudOperationInProgress=false;
                this.getFirstTaskList()
            });
        }
    }
    
    editTask(data){
        if(!this.crudOperationInProgress){
            data.editMode=false;
            this.crudOperationInProgress=true;
            this.taskService.update(this.defaultTaskList.id,data).then((response:any)=>{
                this.crudOperationInProgress=false;
                this.getTasks();
            });
        }
    }
    
    getFirstTaskList(){
        this.taskListService.get().then((response:any)=>{
            this.defaultTaskList=response.result.items[0];
            var taskList=response.result.items[0];
            this.getTasks();
        });
    }
    
    getTasks(){
        this.tasks=[];
        this.completedTasks=[];
        this.pendingTasks=[];
        this.taskService.get(this.defaultTaskList.id).then((response:any)=>{
                this.tasks=response.result.items;
                this.tasks.forEach((task)=>{
                    if(task.status=="completed"){
                        this.completedTasks.push(task);
                    }else if(task.status=="needsAction"){
                        this.pendingTasks.push(task);
                    }
                })
            });
    }

    toggle(id){
        $('#'+id).toggle();
    }
    
    completeTask(data){
        if(data.check){
            data.status="completed";
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
