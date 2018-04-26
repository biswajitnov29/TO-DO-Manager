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


@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.css']
})
export class TaskListsComponent implements OnInit {

  modalRef: BsModalRef;
    tasks:any[]=[];
    pendingTasks:any[]=[];
    completedTasks:any[]=[];
    addTaskEditMode:boolean=false;
    addTaskCatagoryText:string="";
    defaultTaskList:any;
    selectedTaskList:any;
    crudOperationInProgress:boolean=false;
    taskLists:any[]=[];
    loadingTask:boolean=false;
    
    
    @ViewChild('addInputField') addInputFieldEl:ElementRef;
  constructor(private cdr:ChangeDetectorRef,
               private taskListService:TaskListService,
              private taskService:TaskService,
              private modalService: BsModalService,
               private router: Router) { }

  ngOnInit() {
      this.getTaskCatagoryList();
  }
    
    addTaskCatagory(){
        if(!this.crudOperationInProgress){
            this.addTaskEditMode=false;
            this.crudOperationInProgress=true;
            this.loadingTask=true;
            var data={
                title:this.addTaskCatagoryText
            };
            this.taskListService.insert(data).then((response:any)=>{
                this.crudOperationInProgress=false;
                this.getTaskCatagoryList()
            });
        }
    }
    
    editTaskCatagory(data){
        if(!this.crudOperationInProgress){
            data.editMode=false;
            this.crudOperationInProgress=true;
            this.loadingTask=true;
            this.taskListService.update(data).then((response:any)=>{
                this.crudOperationInProgress=false;
                this.getTaskCatagoryList();
            });
        }
    }
    
    getTaskCatagoryList(){
        this.loadingTask=true;
        this.taskLists=[];
        this.taskListService.get().then((response:any)=>{
            this.taskLists=response.result.items;
            this.loadingTask=false;
        });
    }

    toggle(id){
        $('#'+id).toggle();
    }
    focusInput(){
        setTimeout(()=>{
            this.addInputFieldEl.nativeElement.focus();
        }, 1);
    }
    redirectToTask(taskCatagory){
        this.router.navigate(['/tasklist', taskCatagory.id,'tasks']);
    }
    
    
    deleteTask(template: TemplateRef<any>,data){
        this.selectedTaskList=data;
        this.modalRef = this.modalService.show(template, {class: 'modal-sm'});   
    }
    confirmDelete(): void {
        this.modalRef.hide();
        this.loadingTask=true;
        this.taskListService.delete(this.selectedTaskList.id).then((response:any)=>{
            this.getTaskCatagoryList();
        });
    }
    
    declineDelete(): void {
        this.modalRef.hide();
    }

}
