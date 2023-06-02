

export interface VirtualScrollItem {
  virtualId: string;
  position: number;
  height: number;
  rendered: boolean;
}

export interface VirtualScrollViewport {
  viewportSize: number;
  items: VirtualScrollItem[];
  itemsRendered: Map<string, boolean>;
  viewportRange: { first: number; last: number };
}
