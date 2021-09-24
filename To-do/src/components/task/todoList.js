import { Task } from "./task";
import { Fetch } from "../../controllers/fetch";
import { inject } from "aurelia-framework";
import { DialogService } from "aurelia-dialog";
import { TaskDetails } from "./taskDetails";
import "regenerator-runtime/runtime";
@inject(DialogService)
export class TodoList {
  constructor(dialogService) {
    this.list = [];
    this.dialogService = dialogService;
  }
  async removeTask(id) {
    const con = new Fetch("task/delete-task", "DELETE");
    const task = {
      _id: id,
    };
    const result = await con.updateData(task);
    if (result.state) {
      let newList = this.list.filter((task) => {
        return task.id !== id;
      });
      this.list = newList;
    }
  }

  checkDetails(task) {
    this.dialogService
      .open({ viewModel: TaskDetails, model: { task } })
      .whenClosed((response) => {
        if (!response.wasCancelled) {
          const task = {
            ...response.output
          };
          if (task.action === 'delete') {
            this.removeTask(task.id);
          } else {
            this.updateTask(task)
          }
        }
      });
  }

  async updateTask(newTask) {
    const con = new Fetch("task/update-task", "POST");
    const result = await con.updateData(newTask);
    if (result.state) {
      let newList = this.list.map((task)=>{
        if(task.id === newTask.id) {
          return newTask
        } else {
          return task
        }
      })
      this.list = newList;
    }
  }

  async attached() {
    const connection = new Fetch("");
    const data = await connection.getData();
    const list = data.map((task) => {
      const item = new Task(task);
      return item;
    });
    this.list = list;
  }
}
