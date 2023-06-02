import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { GroupInterface } from '../../interfaces/group.interface';
import { ColorPikerComponent } from '../color-picker/color-piker.component';
import { getRandomVariablePresetColor } from '../../utils/utils';
import { NgIf } from '@angular/common';
import { heightFadeAnimation } from '../../animations/height-fade.animation';

@Component({
  standalone: true,
  selector: 'app-kanban-add',
  animations: [heightFadeAnimation],
  template: `
    <button
      *ngIf="!alwaysVisible"
      [disabled]="!model.title && visible"
      type="submit"
      class="contrast mb-0"
      (click)="add()">
      Add {{ type }}
    </button>
    <div
      class="container-kanban-add"
      *ngIf="alwaysVisible || visible"
      @height-fade>
      <input
        type="text"
        placeholder="{{ type }} Name"
        [(ngModel)]="model.title"
        (keydown.enter)="add()" />
      <app-color-picker [(color)]="model.color"></app-color-picker>
    </div>
  `,
  styles: [
    `
      .container-kanban-add {
        display: flex;
      }
    `,
  ],
  imports: [NgIf, FormsModule, ReactiveFormsModule, ColorPikerComponent],
})
export class KanbanAddComponent implements ControlValueAccessor {
  @Input() alwaysVisible = false;
  @Input() type: 'Group' | 'Task' = 'Group';
  @Output() modelChange = new EventEmitter<GroupInterface>();

  model: GroupInterface = { title: '', color: getRandomVariablePresetColor() };
  visible = false;

  private onChangeCallback: any = () => {};

  private onTouchCallback: any = () => {};

  add(): void {
    this.visible = true;
    if (this.model.title) {
      this.modelChange.emit(this.model);
    }
  }

  registerOnTouched(fn: any): void {
    this.onTouchCallback = fn;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  writeValue(obj: any): void {
    this.model = obj;
  }
}
