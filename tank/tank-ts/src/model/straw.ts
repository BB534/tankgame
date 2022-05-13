import ModelAbstract from './modelAbstract'
import { image } from '../service/image'
class Straw extends ModelAbstract implements Model {
  render(): void {
    super.draw(image.get('straw')!)
  }
}

export default Straw