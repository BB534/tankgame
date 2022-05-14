import ModelAbstract from './modelAbstract';
import { image } from '../service/image'
export default class extends ModelAbstract implements Model {
  render(): void {
    super.draw(image.get('water')!)
  }
}