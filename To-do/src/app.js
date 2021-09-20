import {PLATFORM} from 'aurelia-pal';



export class App {
  configureRouter(config, router){
    config.title = 'To-Do List';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('todoList'), name:"Home", title: 'Home' },
      { route: 'addTask',  moduleId: PLATFORM.moduleName('addTask'),name:"Add New Task", title:'Add New Task' },
      { route: 'about',  moduleId: PLATFORM.moduleName('about'),name:"About", title:'About' }
    ]);

    this.router = router;
}}
