import config from '../config';
// 使用keyof来编译获取键
type MapKey = keyof typeof config.images
export const image = new Map<MapKey, HTMLImageElement>()
// 遍历config中的配置贴图然后添加方法,先将对象变为可迭代对象
// 返回一个数组[promise,promise[]
export const promise = Object.entries(config.images).map(([key, value]) => {
  return new Promise(resolve => {
    const img = document.createElement('img')
    img.src = value
    img.onload = () => {
      image.set(key as MapKey, img)
      resolve(img)
    }
  })
})