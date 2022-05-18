import CanvasAbstract from './canvasAbstract'
import config from '../config'
import model from '../model/play'
export default new class extends CanvasAbstract implements CanvasModel {
  num(): number {
    return config.play.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    this.createModels()
    super.renderModels()
  }
  public createModels() {
    const pos = [{
      x: config.canvas.width / 2 + config.model.width * 4,
      y: config.canvas.height - config.model.height
    }]
    pos.forEach((position) => {
      const model = this.model() as ModelConstructor
      const instance = new model(position.x, position.y)
      this.models.push(instance)
    })
  }
}('play')

