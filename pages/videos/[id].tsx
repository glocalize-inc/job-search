import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Card from "../../components/card"
import { getAllVideos, getVideoData } from "../../lib/videos"
import { IVideo, IVideos } from "../../types"

export default function Video(props: IVideo) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description.slice(0, 60)} />
        <meta name="keywords" content={`침착맨, 유튜브, 한글, 영어, 번역, ${props.title}`} />
        <meta name="og:site_name" content="gloz" />
        <meta name="og:title" content={props.title} />
        <meta name="og:description" content={props.description.slice(0, 60)} />
        <meta name="og:url" content="https://gloz.io" />
        <meta name="og:image" content={props.thumbnail.url} />
      </Head>
      <h1>{props.title}</h1>
      <img src={props.thumbnail.url} />
      <div>
        <span>한글</span>
        <span>{'->'}</span>
        <span>영어</span>
      </div>
      <div>
        <span>#번역</span>
      </div>
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