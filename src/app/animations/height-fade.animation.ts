import { animate, state, style, transition, trigger } from '@angular/animations';

export const heightFadeAnimation = trigger('height-fade', [
  state('in', style({ height: '*', opacity: 1, overflow: 'none' })),

  transition(':enter', [
    style({ height: 0, opacity: 0, overflow: 'hidden' }),
    animate(250, style({ height: '*', opacity: 1, overflow: 'hidden' }))
  ]),

  transition(':leave', [style({ overflow: 'hidden' }), animate(250, style({ height: 0, opacity: 0 }))])
]);
