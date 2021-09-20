
import { Task } from "./task"
import { Fetch } from "./fetch"
import 'regenerator-runtime/runtime'

export class TodoList{
  constructor () {
    this.list=[]
  }
  addTask (data) {
    this.list.push(data)
  }
  async removeTask (id) {
    const con = new Fetch("task/delete-task","DELETE")
    const task={
      _id:id
    }
    const result = await con.updateData(task)
    if (result.state) {
      let newList = this.list.filter((task)=>{
        return task.id !== id
      })
      this.list=newList;
    }
  }

  async created(){
    const connection = new Fetch("")
    const data = await connection.getData()
    const list = data.map((task)=>{
      const item = new Task(task)
      return item
    })
    this.list=list
    ;
  }


}
