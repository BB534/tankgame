/// <reference types="vite/client" />

interface ModelConstructor {
  new(x: number, y: number): Model
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
  ctx: CanvasRenderingContext2D
}

