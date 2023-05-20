import { Component, Input } from '@angular/core';
import { TaskInterface } from '../../interfaces/task.interface';

@Component({
  standalone: true,
  selector: 'app-kanban-card',
  template: `
  <div class="kanban-card-container" [style.borderColor]="task.color">
    <div class="kanban-column-title" [style.backgroundColor]="task.color">{{ task.title }}</div>
  </div>
  `,
  styles: [`
    :host {
      .kanban-card-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 80px;
        border: 1px solid;
        border-radius: 4px;

        .kanban-column-title {
          padding: 4px;
          width: 100%;
          color: #fff;
          font-weight: 500;
        }
      }
    }
  `],
  imports: [],
})
export class KanbanCardComponent {
  @Input() task!: TaskInterface;
}
