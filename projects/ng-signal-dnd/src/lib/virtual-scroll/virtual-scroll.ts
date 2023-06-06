import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output, Signal,
  TemplateRef,
} from '@angular/core';

import { fromViewportObserverSignal } from '../signals/from-viewport-observer.signal';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { VirtualScrollViewport } from '../interfaces/virtual-scroll.interface';

@Component({
    standalone: true,
    selector: 'ng-signal-virtual-scroll',
    imports: [NgFor, NgIf, NgTemplateOutlet],
    template: `
<!--      <div class="total-padding" #invisiblePadding></div>-->
      <div class="container-scroll" [style.height.px]="(height * items.length) || height">
        <div class="item-content-slot"
             [style.top.px]="item.position"
             [style.height.px]="height"
             *ngFor="let item of itemsViewport.itemsRendered">
          <ng-container *ngTemplateOutlet="itemContent; context: {$implicit: item.data}"></ng-container>
        </div>
        <ng-container *ngIf="!itemContent">use tag ng-template #itemContent to override this</ng-container>
      </div>
    `,
  styles: [`
    :host .container-scroll {
      position: relative;
    }
    :host .item-content-slot {
      position: absolute;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VirtualScroll implements AfterViewInit {
  @Input() items: any[] = [];
  @Input() height = 30;
  @ContentChild('itemContent', { static: true }) itemContent!: TemplateRef<any>;
  lastKnownScrollPosition = 0;
  ticking = false;

  itemsViewport: VirtualScrollViewport = { itemsRendered: [] };

  @Output() rendered = new EventEmitter<Map<string, boolean>>();

  constructor(private element: ElementRef, private cd: ChangeDetectorRef) {

  }

  ngAfterViewInit() {

    // const signalScrollObserver: Signal<boolean> = fromIntersectionSignal(element, config);
    //
    // effect(() => {
    //   this.rendered.emit(signalObserver());
    //   console.log('the card is rendered: ' + signalObserver());
    // });

    this.element.nativeElement.addEventListener('scroll', (event: any) => {
      this.lastKnownScrollPosition = window.scrollY;

      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.setViewport();
          this.ticking = false;
        });

        this.ticking = true;
      }
    });

    this.setViewport();
  }

  setViewport(): void {
    this.itemsViewport = fromViewportObserverSignal(
      this.element.nativeElement,
      this.items.map( (_, i) => ({
        data: _,
        virtualId: i,
        position: i * this.height,
        height: this.height,
        rendered: false,
      }))
      ,
      this.height
    );

    this.cd.detectChanges();
  }
}
