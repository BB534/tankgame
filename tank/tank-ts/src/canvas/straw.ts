import CanvasAbstract from './canvasAbstract'
import config from '../config'
import model from '../model/straw'
export default new class extends CanvasAbstract implements CanvasModel {
  num(): number {
    return config.straw.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    super.createModels()
    super.renderModels()
  }
}('straw')

