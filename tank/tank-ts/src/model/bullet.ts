import modelAbstract from './modelAbstract'
import { image } from '../service/image'
import bullet from '../canvas/bullet'
import config from '../config'
import { direactionEnum } from '../enum/direaction'
import utils from '../utils'
import wall from '../canvas/wall'
import steel from '../canvas/steel'
import boss from '../canvas/boss'
import tank from '../canvas/tank'
import play from '../canvas/play'
export default class extends modelAbstract implements Model {
  name: string = 'bullet'
  canvas: CanvasModel = bullet
  constructor(public tank: Model) {
    super(tank.x + config.model.width / 2, tank.y + config.model.height / 2)
    this.direaction = tank.direaction as unknown as direactionEnum
  }
  image(): HTMLImageElement {
    return image.get('bullet')!
  }
  render(): void {
    let x = this.x
    let y = this.y
    let step = this.tank.name == 'tank' ? 2 : 10
    switch (this.direaction) {
      case direactionEnum.top:
        y -= step
        break
      case direactionEnum.right:
        x += step
        break
      case direactionEnum.bottom:
        y += step
        break
      case direactionEnum.left:
        x -= step
        break
    }
    const tocuhModel = utils.isModelTouch(x, y, 2, 2, [...wall.models, ...steel.models, ...boss.models, ...tank.models, ...play.models])
    if (utils.isCanvasTouch(x, y, 2, 2,)) {
      // 到画布边缘移除
      this.destroy()
    } else if (
      // 因为子弹是自己中心发射,所以不能自己打自己
      tocuhModel && tocuhModel.name !== this.tank.name
    ) {
      this.destroy()
      if (tocuhModel.name !== 'steel') {

        tocuhModel.destroy()
      }
      this.blast(tocuhModel)
    } else {
      this.x = x
      this.y = y
      this.draw()
    }


  }
  draw() {
    this.canvas.ctx.drawImage(this.image(), this.x, this.y, 2, 2)
  }
}