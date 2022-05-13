/// <reference types="vite/client" />

interface ModelConstructor {
  new(canvas: CanvasRenderingContext2D, x: number, y: number): Model
}

interface Model {
  render(): void
}