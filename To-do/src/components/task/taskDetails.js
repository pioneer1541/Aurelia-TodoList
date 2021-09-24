import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@inject(DialogController)


export class TaskDetails {
  constructor (controller) {
    this.controller = controller;
    controller.settings.centerHorizontalOnly = true;
    
  }  

  activate(task) {
    console.log(task.task.id)
    this.taskId = task.task.id;
    this.taskTitle = task.task.title;
    this.taskDescription = task.task.description;
    this.taskStartDate = task.task.startDate;
    this.taskEndDate = task.task.endDate;
    
  }
  response(action) {
    return {
      action:action,
      id:this.taskId,
      title:this.taskTitle,
      description:this.taskDescription,
      startDate:this.taskStartDate,
      endDate:this.taskEndDate
    }
  }
}


