import { Component } from '@angular/core';
import { ToDo } from './ToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';
  ToDoList: ToDo[] = [
    new ToDo("Water the cat", true),
    new ToDo("Take out the trash", false),
    new ToDo("Steal someone's homework", false),
    new ToDo("Steal neighbors lawn gnome", true),
    new ToDo("Tell people the truth about birds", false)
  ];
  newToDo: ToDo = new ToDo("", false);
  filterText: string = "";
  filteredTasks: ToDo[] = this.ToDoList;

  addTask(): void{
    let t = Object.assign({}, this.newToDo);
    this.ToDoList.push(t);
  }

  completeTask(index: number): void {
    let t: ToDo = this.ToDoList[index];
    t.Completed = true;
  }

  removeTask(index: number): void {
    this.ToDoList.splice(index, 1);
  }

  filterArray(tName: string) {
    this.filteredTasks = this.ToDoList.filter(t => t.TaskName.includes(tName));
  }
}
