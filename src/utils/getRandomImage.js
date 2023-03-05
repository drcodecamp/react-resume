import { getRandomIntInclusive } from './getRandomNumber.js'
import SRC from '../assets/bg1.webp'
import SRC2 from '../assets/bg2.webp'
import SRC3 from '../assets/bg3.webp'

export const getRandomImage = () => {
  const randomIdx = getRandomIntInclusive(1, 3)
  switch (randomIdx) {
    case 1:
      return SRC
    case 2:
      return SRC2
    case 3:
      return SRC3
    default:
      return SRC
  }
}
