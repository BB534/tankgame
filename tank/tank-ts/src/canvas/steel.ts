import config from '../config'
import CanvasAbstract from './canvasAbstract';
import model from '../model/steel'
export default new class extends CanvasAbstract implements CanvasModel {
  num(): number {
    return config.steel.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    super.createModels()
    super.renderModels()
  }
}('steel')
