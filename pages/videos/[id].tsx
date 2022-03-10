import { GetStaticPaths, GetStaticProps } from "next"
import Card from "../../components/card"
import { getAllVideos, getVideoData } from "../../lib/videos"
import { IVideo, IVideos } from "../../types"

export default function Video(props: IVideo) {
  return (
    <div>
      <Card item={props} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await getAllVideos() as IVideos
  const paths = result.items.map(item => ({
    params: {
      id: item.videoId
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const result = await getVideoData(params.id as string)
  return {
    props: result.item
  }
}