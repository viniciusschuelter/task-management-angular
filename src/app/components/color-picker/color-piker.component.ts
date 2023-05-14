import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-color-picker',
  template: `
    <div
      [style.backgroundColor]="color"
      class="d-flex align-items-center justify-content-center rounded"
      (click)="showGrid = true"
    >
      <i class="ic-paint-bucket" [style.color]="color"></i>
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
  @Input() color: string;
  @Output() colorChange = new EventEmitter<string>();

  showGrid = false;

  colors = [
    "#EB4040", // 'var(--red)'
    "#E91F64", // 'var(--pink)'
    "#9C28B1", // 'var(--purple)'
    "#7241CC", // 'var(--purple-2)'
    "#4052B6", // 'var(--indigo)'
    "#048BF6", // 'var(--blue)'
    "#00B1FF", // 'var(--blue-2)'
    "#00C6D5", // 'var(--teal)'
    "#05ACB7", // 'var(--cyan)'
    "#53B67D", // 'var(--green)'
    "#8BC248", // 'var(--green-2)'
    "#C7D048", // 'var(--green-3)'
    "#FABF2B", // 'var(--yellow)'
    "#FF9700", // 'var(--orange)'
    "#FF5C00", // 'var(--orange-2)'
    "#795547" // 'var(--brown)'
  ];
}
