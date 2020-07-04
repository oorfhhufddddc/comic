// 镜像站

import { io } from "./fs"
import { mirror_default_domain } from '@/const/key'

/**
 * 设置镜像 `url`
 */
export const setMirror = (ext: string = mirror_default_domain) => {
  return io.setMirror(ext)
}

/**
 * 获取镜像 `url`
 */
export const getMirror = (): string=> {
  try {
    const _domain = io.getMirror()
    const value = _domain.value as string
    return value
  } catch (error) {
    console.error(error)
    return mirror_default_domain
  }
}