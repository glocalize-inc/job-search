import { GetStaticProps } from "next";
import Card from "../../components/card";
import { getAllVideos } from "../../lib/videos";
import { IVideos } from "../../types";

export default function Videos({
  region,
  items,
}: IVideos) {
  return (
    <div>
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