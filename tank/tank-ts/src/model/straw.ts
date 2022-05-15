import ModelAbstract from './modelAbstract'
import { image } from '../service/image'
class Straw extends ModelAbstract implements Model {
  image(): HTMLImageElement {
    return image.get('straw')!
  }
  render(): void {
    super.draw()
  }
}

export default Straw