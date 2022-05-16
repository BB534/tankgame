import config from '../config'
import { direactionEnum } from '../enum/direaction';
abstract class ModelAbstract {
  abstract render(): void
  abstract image(): HTMLImageElement
  abstract canvas: CanvasModel
  public width = config.model.width
  public height = config.model.height
  public direaction: direactionEnum = direactionEnum.bottom
  constructor(public x: number, public y: number) {
    this.randomDireaction()
  }
  draw() {
    this.canvas.ctx.drawImage(this.image(), this.x, this.y, config.model.width, config.model.height)
  }

  protected randomDireaction() {
    this.direaction = Object.keys(direactionEnum)[Math.floor(Math.random() * 4)] as direactionEnum
  }
  public destroy() {
    this.canvas.removeModel(this)
    this.canvas.renderModels()
  }
}

export default ModelAbstract