

export interface VirtualScrollItem {
  virtualId: string;
  position: number;
  height: number;
  rendered: boolean;
  data: any;
}

export interface VirtualScrollViewport {
  viewportSize?: number;
  items?: unknown[];
  itemsRendered: VirtualScrollItem[];
  viewportRange?: { firstIndex: number; lastIndex: number };
}
