import ModelAbstract from './modelAbstract';
import { direactionEnum } from '../enum/direaction';
import { image } from '../service/image'
import _ from 'lodash'
import config from '../config';
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
    return x < 0 || x + this.width > config.canvas.width || y < 0 || y + this.height > config.canvas.height
  }
  image(): HTMLImageElement {
    let direaction = 'tank' + _.upperFirst(this.direaction)
    return image.get(direaction as keyof typeof config.images)!
  }

}

