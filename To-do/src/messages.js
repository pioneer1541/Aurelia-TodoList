import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@inject(DialogController)

export class Messages {
   constructor(controller) {
      this.controller = controller;
      this.answer = null;

      controller.settings.centerHorizontalOnly = true;
   }
   activate(message) {
      this.title = message.title;
      this.content = message.content
   }
}
