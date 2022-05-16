/// <reference types="vite/client" />

interface ModelConstructor {
  new(x: number, y: number): Model
}

interface BulletModelConstructor {
  new(tank: Model): Model
}

interface Model {
  render(): void
  image(): HTMLImageElement
  tank?: Model
  direaction?: string
  x: number
  y: number
  width: number
  height: number
  destroy(): void
}

interface CanvasModel {
  model(): ModelConstructor | BulletModelConstructor
  num(): number
  ctx: CanvasRenderingContext2D
  removeModel(model: Model)
  renderModels(): void
}

