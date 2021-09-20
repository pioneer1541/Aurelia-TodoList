import dayjs from "../node_modules/dayjs";
import { Fetch } from "./fetch";
import { Messages } from "./messages";
import { inject } from "aurelia-framework";
import { DialogService } from "aurelia-dialog";

@inject(DialogService)
export class AddTask {
  constructor(dialogService) {
    this.isValid = false;
    this.title = "";
    this.description = "";
    this.startDate = new dayjs(Date.now()).format("YYYY-MM-DD");
    this.endDate = new dayjs(Date.now()).format("YYYY-MM-DD");
    this.dialogService = dialogService;
  }

  inputIsValid = () => {
    if (this.title.length < 1) {
      this.showMessage("Failed!", "The Title can not be empty!");

      return false;
    }
    if (this.description.length < 1) {
      this.showMessage("Failed!", "The Description can not be empty!");

      return false;
    }
    if (this.startDate > this.endDate) {
      this.showMessage("Failed!", "The Start Date must be early than End Dte!");
      return false;
    }
    if (new Date(this.endDate) < Date.now()) {
      this.showMessage("Failed!", "The End Date must be later than today!");
      return;
    }
    return true;
  };

  showMessage(title, content) {
    this.dialogService
      .open({ viewModel: Messages, model: { title: title, content: content } })
      .then((response) => {
        console.log(response);

        if (!response.wasCancelled) {
          return true;
        } else {
          return false;
        }
        return true;
      });
  }

  async addNewTask() {
    if (this.inputIsValid()) {
      const task = {
        username: "Pioneer1541",
        title: this.title,
        description: this.description,
        startDate: this.startDate,
        endDate: this.endDate,
      };
      const con = new Fetch("task/new-task", "POST");

      const result = await con.updateData(task);
      console.log(result.state);
      this.showMessage("Success!", "New Task has been added!");
    }
  }
}
