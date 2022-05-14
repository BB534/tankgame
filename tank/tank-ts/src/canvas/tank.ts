import config from '../config'
import CanvasAbstract from './canvasAbstract';
import model from '../model/tank'
import position from '../service/position';
class Tank extends CanvasAbstract implements CanvasModel {
  num(): number {
    return config.tank.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    this.createModels()
    super.renderModels()
  }
  // 重写坦克自己生成的逻辑
  protected createModels(): void {
    for (let i = 0; i < this.num(); i++) {
      const pos = position.position()
      const model = this.model()
      const instance = new model(this.canvas, pos.x, 0)
      this.models.push(instance)
    }

  }
}

export default new Tank()