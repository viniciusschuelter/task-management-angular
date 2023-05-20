import { Component, Input } from '@angular/core';
import { TaskInterface } from '../../interfaces/task.interface';

@Component({
  standalone: true,
  selector: 'app-kanban-card',
  template: `
    <div class="kanban-card-container" [style.borderColor]="task.color">
      <div class="kanban-column-title" [style.backgroundColor]="task.color">
        {{ task.title }}
      </div>
      <div class="kanban-column-description">
        {{ task.description || 'No description' }}
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        .kanban-card-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 80px;
          border: 1px solid;
          border-radius: 4px;

          .kanban-column-title {
            font-size: 16px;
            padding: 4px;
            color: #fff;
            font-weight: 500;
          }
          .kanban-column-description {
            font-size: 14px;
            padding: 4px;
            font-weight: 500;
            font-style: italic;
          }
        }
      }
    `,
  ],
  imports: [],
})
export class KanbanCardComponent {
  @Input() task!: TaskInterface;
}
