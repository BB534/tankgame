import ModelAbstract from './modelAbstract';
import { direactionEnum } from '../enum/direaction';
import { image } from '../service/image'
import _ from 'lodash'
import config from '../config';
export default class extends ModelAbstract implements Model {
  protected direaction: direactionEnum = direactionEnum.bottom
  render(): void {
    this.randomPos()
    super.draw(this.randomImage())
  }
  randomPos() {
    this.direaction = Object.keys(direactionEnum)[Math.floor(Math.random() * 4)] as direactionEnum
  }
  randomImage() {
    let direaction = 'tank' + _.upperFirst(this.direaction)
    return image.get(direaction as keyof typeof config.images)!
  }
}

