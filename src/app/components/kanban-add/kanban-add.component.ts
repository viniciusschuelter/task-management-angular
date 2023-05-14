import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-kanban-add',
  template: `<article class="grid">
    <div class="grid">
        <input
          type="text"
          name="name"
          formControlName="name"
          placeholder="Workspace name"
          [(ngModel)]=""
        />
        <app-color-picker></app-color-picker>
    </div>
  `,
  imports: [FormsModule],
})
export class KanbanAddComponent {
  obje
}
