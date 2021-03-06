import config from '../config'
import CanvasAbstract from './canvasAbstract';
import model from '../model/tank'
import position from '../service/position';
export default new class extends CanvasAbstract implements CanvasModel {
  intervalId = 0
  num(): number {
    return config.tank.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    this.createModels()
    this.renderModels()
    this.intervalId = setInterval(() => this.renderModels(), config.timeout)
  }
  // 重写自己坦克自己的模型渲染
  public renderModels() {
    this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height)
    this.models.forEach(model => {
      model.render()
      this.ctx.drawImage(model.image(), model.x, model.y, config.model.width, config.model.height)
    })
  }
  // 重写坦克自己生成的逻辑
  protected createModels(): void {
    for (let i = 0; i < this.num(); i++) {
      const pos = position.position()
      const model = this.model()
      const instance = new model(pos.x, 0)
      this.models.push(instance)
    }

  }
  public stop(): void {
    clearInterval(this.intervalId)
  }
}('tank')

