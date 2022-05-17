import config from '../config'
import CanvasAbstract from './canvasAbstract';
import model from '../model/boss'
export default new class extends CanvasAbstract implements CanvasModel {
  num(): number {
    return config.boss.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    this.createModels()
    super.renderModels()
  }
  createModels() {
    const pos = [{
      x: config.canvas.width / 2,
      y: config.canvas.height - config.model.height
    }]
    pos.forEach((position) => {
      const model = this.model() as ModelConstructor
      const instance = new model(position.x, position.y)
      this.models.push(instance)
    })
  }
}('boss')
