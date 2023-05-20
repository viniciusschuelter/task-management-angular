import { animate, state, style, transition, trigger } from '@angular/animations';

export const widthFadeAnimation = trigger('width-fade', [
  state('in', style({ width: '*', opacity: 1, overflow: 'none' })),

  transition(':enter', [
    style({ width: 0, opacity: 0, overflow: 'hidden' }),
    animate(250, style({ width: '*', opacity: 1, overflow: 'hidden' }))
  ]),

  transition(':leave', [style({ overflow: 'hidden' }), animate(250, style({ width: 0, opacity: 0 }))])
]);

export const widthFadeInvertAnimation = trigger('width-fade', [
  state('in', style({ width: '*', opacity: 1, overflow: 'none' })),

  transition(':enter', [
    style({
      width: 0,
      opacity: 0,
      overflow: 'hidden',
      position: 'absolute',
      right: 0
    }),
    animate(250, style({ width: '*', opacity: 1, overflow: 'hidden' }))
  ]),

  transition(':leave', [style({ overflow: 'hidden' }), animate(250, style({ width: 0, opacity: 0 }))])
]);
