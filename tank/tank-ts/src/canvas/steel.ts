import config from '../config'
import CanvasAbstract from './canvasAbstract';
import model from '../model/steel'
class Steel extends CanvasAbstract implements CanvasModel {
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
}

export default new Steel()