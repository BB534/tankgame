import canvasAbstract from './canvasAbstract'
import config from '../config'
import model from '../model/wall'
class Wall extends canvasAbstract {
  constructor() {
    super()
    super.createModels(config.wall.num, model)
  }
  render(): void {
    super.renderModels()
  }
}

export default new Wall()