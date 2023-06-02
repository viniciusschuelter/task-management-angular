import {
  AfterViewInit,
  Directive,
  effect,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  Output,
  Signal,
} from '@angular/core';

import { fromViewportObserverSignal } from '../signals/from-viewport-observer.signal';

@Directive({ standalone: true, selector: '[ngSignalVirtualScroll]' })
export class VirtualScrollDirective implements AfterViewInit {
  @Input() intersectionDebounce = 0;
  @Input() intersectionRootMargin = '0px';
  @Input() intersectionRoot!: HTMLElement;
  @Input() intersectionThreshold!: number | number[];

  @Output() rendered = new EventEmitter<Map<string, boolean>>();

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    const element = this.element.nativeElement;
    const config = {
      root: this.intersectionRoot,
      rootMargin: this.intersectionRootMargin,
      threshold: this.intersectionThreshold,
    };

    fromViewportObserverSignal(element, 50);

    // effect(() => {
    //   this.rendered.emit(signalObserver());
    //   console.log('the card is rendered: ' + signalObserver());
    // });
  }
}
