import CanvasAbstract from './canvasAbstract'
import config from '../config'
import model from '../model/straw'
class Straw extends CanvasAbstract {
  constructor() {
    super()
    super.createModels(config.straw.num, model)
  }
  render(): void {
    super.renderModels()
  }
}

export default new Straw()