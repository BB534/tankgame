import canvasAbstract from './canvasAbstract'
import config from '../config'
import model from '../model/wall'
export default new class extends canvasAbstract implements CanvasModel {
  num(): number {
    return config.wall.num
  }
  model(): ModelConstructor {
    return model
  }

  render(): void {
    super.createModels()
    super.renderModels()
  }
}('wall')
