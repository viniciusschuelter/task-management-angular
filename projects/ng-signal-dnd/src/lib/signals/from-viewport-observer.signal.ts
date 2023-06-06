import { signal, Signal } from '@angular/core';
import { binarySearch } from '../utils/utils';
import { VirtualScrollViewport } from '../interfaces/virtual-scroll.interface';

export const fromViewportObserverSignal = (viewport: HTMLElement, items: any[], totalHeight: number): VirtualScrollViewport => {
  const Y_OFFSET = 60; // Extra pixels outside the viewport, in each direction, to render nodes in
  const Y_EPSILON = 15; // Minimum pixel change required to recalculate the rendered nodes

  const yBlocks = Math.round(viewport.scrollTop / Y_EPSILON) || 0;
  const x = viewport.scrollLeft || 0;
  const viewportHeight = viewport.getBoundingClientRect().height || 0;

  const y =  yBlocks * Y_EPSILON;

  const visibleNodes = [...items];

  // debugger

  // if (!viewportHeight || !visibleNodes.length) return [];


  // When loading children async this method is called before their height and position is calculated.
  // In that case firstIndex === 0 and lastIndex === visibleNodes.length - 1 (e.g. 1000),
  // which means that it loops through every visibleNodes item and push them into viewportNodes array.
  // We can prevent nodes from being pushed to the array and wait for the appropriate calculations to take place
  // const lastVisibleNode = visibleNodes.slice(-1)[0]
  // if (!lastVisibleNode.height && lastVisibleNode.position === 0) return [];

  // Search for first node in the viewport using binary search
  // Look for first node that starts after the beginning of the viewport (with buffer)
  // Or that ends after the beginning of the viewport
  const firstIndex = binarySearch(visibleNodes, (node: any) => {
    return (node.position + Y_OFFSET > y) ||
      (node.position + node.height > y);
  });

  // Search for last node in the viewport using binary search
  // Look for first node that starts after the end of the viewport (with buffer)
  const lastIndex = binarySearch(visibleNodes, (node: any) => {
    return node.position - Y_OFFSET > y + viewportHeight;
  }, firstIndex);

  const viewportNodes = [];

  for (let i = firstIndex; i <= lastIndex; i++) {
    viewportNodes.push(visibleNodes[i]);
  }

  console.log(viewportNodes);

  return {
    items,
    itemsRendered: viewportNodes,
    viewportSize: viewport.clientHeight,
    viewportRange: { firstIndex, lastIndex }
  }

  debugger
};

