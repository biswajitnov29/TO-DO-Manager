import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TaskListService } from "../../services/task-list.service";
import { TaskService } from "../../services/task.service";
import * as $ from 'jquery';

@Component({
  selector: 'app-default-tasks',
  templateUrl: './default-tasks.component.html',
  styleUrls: ['./default-tasks.component.css']
})
export class DefaultTasksComponent implements OnInit {

    tasks:any[]=[];
    pendingTasks:any[]=[];
    completedTasks:any[]=[];
    addTaskEditMode:boolean=false;
    addTaskText:string="";
  constructor(private cdr:ChangeDetectorRef,
               private taskListService:TaskListService,
              private taskService:TaskService) { }

  ngOnInit() {
      this.getFirstTaskList();
  }
    
    focusOutAddTask(){
        this.addTaskEditMode=false;
    }
    
    getFirstTaskList(){
        this.taskListService.get().then((response:any)=>{
            var taskList=response.result.items[0];
            this.taskService.get(taskList.id).then((response:any)=>{
                this.tasks=response.result.items;
                this.tasks.forEach((task)=>{
                    if(task.status=="completed"){
                        this.completedTasks.push(task);
                    }else if(task.status=="needsAction"){
                        this.pendingTasks.push(task);
                    }
                })
            });
        });
    }

    toggle(id){
        $('#'+id).toggle();
    }
    
    getDiferenceInDays(date : string) : string {
        var theDate=new Date(date);
        var dayDiff=Math.floor((new Date().getTime() - theDate.getTime()) / (1000 * 60 * 60 * 24));
        if(dayDiff>1){
            return dayDiff+" days ago";
        }else if(dayDiff==1){
            return "one day ago";
        }else{
            var minDiff=Math.floor((new Date().getTime() - theDate.getTime()) / (1000 * 60 * 60 ));
            
            if(minDiff>=1){
                return minDiff+" min ago";
            }else{
                return "just now";
            }
        }
    }
}
