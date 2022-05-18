import config from '../config'
import { direactionEnum } from '../enum/direaction';
import audio from '../service/audio';
abstract class ModelAbstract {
  abstract render(): void
  abstract name: string
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
  public blast(model: Model) {
    Array(...Array(8).keys()).reduce((promise, item) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const img = new Image()
          img.src = `src/static/images/blasts/blast${item}.gif`
          img.onload = () => {
            this.canvas.ctx.drawImage(img, model.x, model.y, model.width, model.height)
            audio.aBlast()
            resolve(promise)
          }
        }, 100)
      })
    }, Promise.resolve())
  }
}

export default ModelAbstract