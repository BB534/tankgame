/// <reference types="vite/client" />

interface ModelConstructor {
  new(canvas: CanvasRenderingContext2D, x: number, y: number): Model
}

interface Model {
  render(): void
  image(): HTMLImageElement
  x: number
  y: number
  width: number
  height: number
}

interface CanvasModel {
  model(): ModelConstructor
  num(): number
}

