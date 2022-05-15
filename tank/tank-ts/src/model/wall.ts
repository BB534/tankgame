import modelAbstract from './modelAbstract'
import { image } from '../service/image'
export default class extends modelAbstract implements Model {
  image(): HTMLImageElement {
    return image.get('wall')!
  }
  render(): void {
    super.draw()
  }
}