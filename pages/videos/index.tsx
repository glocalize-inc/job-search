import { GetStaticProps } from "next";
import Head from "next/head";
import Card from "../../components/card";
import { getAllVideos } from "../../lib/videos";
import { IVideos } from "../../types";

export default function Videos({
  region,
  items,
}: IVideos) {
  return (
    <div>
      <Head>
        <title>침착맨 유튜브 번역 검색 결과</title>
        <meta name="description" content="번역된 침착맨의 영상 목록입니다" />
        <meta name="keywords" content="침착맨, 유튜브, 검색, 번역" />
        <meta name="og:site_name" content="gloz" />
        <meta name="og:title" content="침착맨 유튜브 번역 검색 결과" />
        <meta name="og:description" content="번역된 침착맨의 영상 목록입니다" />
        <meta name="og:url" content="https://gloz.io" />
        <meta name="og:image" content={items[0].thumbnail.url} />
      </Head>
      <h1>{region}</h1>
      <div>
        {items.map((item, index) => (
          <Card 
            key={`item-${index}`} 
            item={item}
          />
        ))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allVideosData = await getAllVideos()
  return {
    props: allVideosData
  }
}