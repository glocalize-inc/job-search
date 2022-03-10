export interface IThumbnail {
  url: string
  width: number
  height: number
}

export interface IVideo {
  title: string
  description: string
  thumbnail: IThumbnail
  publishedAt: Date
  channelTitle: string
  videoId: string
  sourceUrl: string
}

export interface IVideos {
  region: string
  nextPageToken?: string
  prevPageToken?: string
  items: IVideo[]
}