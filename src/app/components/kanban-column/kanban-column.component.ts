import { Component, Input } from '@angular/core';
import { GroupInterface } from '../../interfaces/group.interface';

@Component({
  standalone: true,
  selector: 'app-kanban-column',
  template: `
    <div class="kanban-column-container" [style.borderColor]="column.color">
      <div class="kanban-column-header" [style.backgroundColor]="column.color">
        {{ column.title }}
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
  imports: [],
})
export class KanbanColumnComponent {
  @Input() column!: GroupInterface;

}
