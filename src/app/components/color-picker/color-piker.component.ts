import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { getRandomVariablePresetColor, presetColors } from '../../utils/utils';

@Component({
  standalone: true,
  selector: 'app-color-picker',
  template: `
    <div
      [style.backgroundColor]="color"
      class="d-flex align-items-center justify-content-center rounded ms-3"
      (click)="showGrid = true"
    >
<!--      <i class="ic-paint-bucket" [style.color]="color"></i>-->
      <img class="p-2" src="assets/icons/colors.svg" [style.color]="color"/>
    </div>
    <div class="colors-grid my-5" *ngIf="showGrid">
      <div
        *ngFor="let item of colors"
        class="color d-flex align-items-center justify-content-center"
        [style.backgroundColor]="item"
        [class.active]="color === item"
        (click)="color = item; colorChange.emit(color)"
      >
        <i class="ic-check text-white"></i>
      </div>
    </div>
  `,
  imports: [NgIf, NgFor],
  styles: [`
    .colors-grid {
      display: grid;
      grid-template-columns: repeat(4, 28px);
      grid-row-gap: 24px;
      grid-column-gap: 24px;

      .color {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        transition: transform 0.2s cubic-bezier(0.34, 0.96, 0.7, 1.14);

      }
    }
  `]
})
export class ColorPikerComponent {
  @Input() color: string | undefined;
  @Output() colorChange = new EventEmitter<string>();

  showGrid = false;

  colors: string[] = presetColors;
}
