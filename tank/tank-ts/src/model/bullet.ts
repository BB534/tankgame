import modelAbstract from './modelAbstract'
import { image } from '../service/image'
import bullet from '../canvas/bullet'
import config from '../config'
import { direactionEnum } from '../enum/direaction'
export default class extends modelAbstract implements Model {
  canvas: CanvasModel = bullet
  constructor(public tank: Model) {
    super(tank.x + config.model.width / 2, tank.y + config.model.height / 2)
    this.direaction = tank.direaction as unknown as direactionEnum
  }
  image(): HTMLImageElement {
    return image.get('bullet')!
  }
  render(): void {
    // 移动
    while (true) {
      let x = this.x
      let y = this.y
      switch (this.direaction) {
        case direactionEnum.top:
          y -= 2
          break
        case direactionEnum.right:
          x += 2
          break
        case direactionEnum.bottom:
          y += 2
          break
        case direactionEnum.left:
          x -= 2
          break
      }
      this.x = x
      this.y = y
      this.draw()
      break
    }
  }
  draw() {
    this.canvas.ctx.drawImage(this.image(), this.x, this.y, 2, 2)
  }
}