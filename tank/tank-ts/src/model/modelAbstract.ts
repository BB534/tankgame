import config from '../config'
import { direactionEnum } from '../enum/direaction';
abstract class ModelAbstract {
  abstract render(): void
  abstract image(): HTMLImageElement
  protected direaction: direactionEnum = direactionEnum.bottom
  constructor(public canvas: CanvasRenderingContext2D, public x: number, public y: number) {
    this.randomPos()
  }
  draw() {
    this.canvas.drawImage(this.image(), this.x, this.y, config.model.width, config.model.height)
  }

  protected randomPos() {
    this.direaction = Object.keys(direactionEnum)[Math.floor(Math.random() * 4)] as direactionEnum
  }
}

export default ModelAbstract