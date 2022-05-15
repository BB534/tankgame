import config from '../config'
import position from '../service/position'
abstract class CanvasAbstract {
  protected models: Model[] = []
  protected items = []
  abstract num(): number
  abstract model(): ModelConstructor
  abstract render(): void
  constructor(protected app = document.querySelector('#app') as HTMLDivElement, protected el = document.createElement('canvas'), protected canvas = el.getContext('2d')!) {
    this.createCanvas()
  }
  // 创建画布
  protected createCanvas() {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height
    this.app.insertAdjacentElement('afterbegin', this.el)
  }
  // 绘制贴图方法
  protected createModels() {
    position.Getposition(this.num()).forEach((position) => {
      const model = this.model()
      const instance = new model(this.canvas, position.x, position.y)
      this.models.push(instance)
    })
  }
  // 渲染模型到画布上
  protected renderModels() {
    // this.canvas.clearRect(0, 0, config.canvas.width, config.canvas.height)
    this.models.forEach(model => {
      model.render()
    })
  }
}

export default CanvasAbstract