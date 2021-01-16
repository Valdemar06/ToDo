import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Task} from '../../model/Task';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
  public dataSource: MatTableDataSource<Task>; // container - source data for the table

  tasks: Task[];

  constructor(private dataHandler: DataHandlerService) { }

  // method call automate after initialize component
  ngOnInit(): void {
   this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks);

   this.dataSource = new MatTableDataSource();
   this.refreshTable();
  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }

  //Return color task
  private getPriorityColor(task:Task){

    //Color finished task
    if(task.completed){
      return '#F8F9FA'
    }
    if (task.priority && task.priority.color){
      return task.priority.color;
    }
    return '#fff'
  }

// Show all task with all current conditions applied
  private refreshTable() {
    this.dataSource.data = this.tasks; // update source data
  }
}
