import {PLATFORM} from 'aurelia-pal';
import { activationStrategy } from 'aurelia-router';


export class App {
  configureRouter(config, router){
    config.title = 'To-Do List';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('./components/task/todoList'), name:"Home", title: 'Home'},
      { route: 'addTask',  moduleId: PLATFORM.moduleName('./components/page/addTask'),name:"Add New Task", title:'Add New Task' },
      { route: 'about',  moduleId: PLATFORM.moduleName('./components/page/about'),name:"About", title:'About' }
    ]);

    this.router = router;
}}
