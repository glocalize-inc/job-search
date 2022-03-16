import { IVideos } from "../types"

// @todo 테스트 용으로 침착맨 영상만 가져옴
export async function getAllVideos(q: string = '침착맨') {
  const response = await fetch(`${process.env.ZARCIAN_API}/youtube/info/search?q=${q}`)
  const result = await response.json() as IVideos
  return result
}

export async function getVideoData(id: string) {
  const response = await fetch(`${process.env.ZARCIAN_API}/youtube/info/detail?video=https://youtu.be/${id}`)
  const result = await response.json()
  return result
}