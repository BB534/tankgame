import ModelAbstract from './modelAbstract';
import { direactionEnum } from '../enum/direaction';
import { image } from '../service/image'
import _ from 'lodash'
import config from '../config';
import water from '../canvas/water';
import wall from '../canvas/wall';
import steel from '../canvas/steel';
export default class extends ModelAbstract implements Model {
  render(): void {
    super.draw()
    this.move()
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
      if (this.isTouch(x, y) === true) {
        this.randomDireaction()
      } else {
        this.x = x
        this.y = y
        break;
      }
    }
    super.draw()
  }
  protected isTouch(x: number, y: number) {
    // 画布碰撞检测
    if (x < 0 || x + this.width > config.canvas.width || y < 0 || y + this.height > config.canvas.height) {
      return true
    }
    const models = [...water.models, ...wall.models, ...steel.models]
    return models.some((model) => {
      const state = x + this.width <= model.x || x >= model.x + model.width || y + this.height <= model.y || y >= model.y + model.height
      return !state
    })
    // 模型碰撞检测

    return false
  }
  image(): HTMLImageElement {
    let direaction = 'tank' + _.upperFirst(this.direaction)
    return image.get(direaction as keyof typeof config.images)!
  }

}

