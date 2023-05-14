import { Component, Input } from '@angular/core';
import { GroupInterface } from '../../interfaces/group.interface';

@Component({
  standalone: true,
  selector: 'app-kanban-column',
  template: `{{ column.title }}`,
  imports: [],
})
export class KanbanColumnComponent {
  @Input() column!: GroupInterface;

}
