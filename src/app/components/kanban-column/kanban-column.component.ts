import { Component, inject, Input, OnInit } from '@angular/core';
import { GroupInterface } from '../../interfaces/group.interface';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { KanbanCardComponent } from '../kanban-card/kanban-card.component';
import { TaskInterface } from '../../interfaces/task.interface';
import { KanbanAddComponent } from '../kanban-add/kanban-add.component';

@Component({
  standalone: true,
  selector: 'app-kanban-column',
  template: `
    <div class="kanban-column-container" [style.borderColor]="column.color">
      <div class="kanban-column-header" [style.backgroundColor]="column.color">
        {{ column.title }}
      </div>
      <app-kanban-add type="Task" [alwaysVisible]="true" (modelChange)="addTask($event)"></app-kanban-add>
      <div class="kanban-column-content p-3" *ngIf="tasks$ | async as tasks">
        <app-kanban-card [task]="task" *ngFor="let task of tasks"></app-kanban-card>
      </div>
    </div>
  `,
  styles: [`
    :host {
      .kanban-column-container {
        display: flex;
        flex-direction: column;
        width: 280px;
        margin-right: 24px;
        height: calc(100vh - 250px);
        border: 2px solid;
        border-radius: 8px;

        .kanban-column-header {
          padding: 8px;
          width: 100%;
          color: #fff;
          font-weight: 500;
        }
      }
    }
  `],
  imports: [NgIf, NgFor, AsyncPipe, KanbanCardComponent, KanbanAddComponent],
})
export class KanbanColumnComponent implements OnInit {
  @Input() column!: GroupInterface;

  taskService = inject(TaskService)

  tasks$!: Observable<TaskInterface[]>;

  ngOnInit(): void {
    this.tasks$ = this.taskService
      .getTasksByGroup(this.column?.id || '')
      .pipe()
  }

  addTask(task: TaskInterface): void {
    this.taskService.postTaskByGroup({ ...task, group: this.column }).subscribe()
  }
}
