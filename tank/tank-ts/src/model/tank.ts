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
    switch (this.direaction) {
      case direactionEnum.top:
        this.y--
        break;
      case direactionEnum.right:
        this.x++
        break;
      case direactionEnum.bottom:
        this.y++
        break;
      case direactionEnum.left:
        this.x--
        break;
    }
  }
  image(): HTMLImageElement {
    let direaction = 'tank' + _.upperFirst(this.direaction)
    return image.get(direaction as keyof typeof config.images)!
  }

}

