import ModelAbstract from './modelAbstract';
import { direactionEnum } from '../enum/direaction';
import { image } from '../service/image'
import _ from 'lodash'
import config from '../config';
import utils from '../utils'
import tank from '../canvas/tank'
export default class extends ModelAbstract implements Model {
  canvas: CanvasModel = tank;
  render(): void {
    super.draw()
    this.move()
    // 调大往下移动概率,防止在上方徘徊
    if (_.random(10) === 1) this.direaction = direactionEnum.bottom

  }
  move(): void {
    while (true) {
      let x = this.x
      let y = this.y
      switch (this.direaction) {
        case direactionEnum.top:
          y--
          break;
        case direactionEnum.right:
          x++
          break;
        case direactionEnum.bottom:
          y++
          break;
        case direactionEnum.left:
          x--
          break;
      }
      if (utils.isModelTouch(x, y) || utils.isCanvasTouch(x, y)) {
        this.randomDireaction()
      } else {
        this.x = x
        this.y = y
        break;
      }
    }
    super.draw()
  }
  image(): HTMLImageElement {
    let direaction = 'tank' + _.upperFirst(this.direaction)
    return image.get(direaction as keyof typeof config.images)!
  }

}

