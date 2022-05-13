import modelAbstract from './modelAbstract'
import { image } from '../service/image'
export default class extends modelAbstract implements Model {
  render(): void {
    super.draw(image.get('wall')!)
  }
}