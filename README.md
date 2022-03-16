This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## _app.tsx

## _document.tsx

## pre-rendering

데이터를 받아와서 서버에서 rendering함

### GetStaticProps

빌드 시에 딱 한번만 호출

SSG (Static Site Generation) 개념

앱 빌드 후 바뀌지 않는 내용인 경우 사용

### GetStaticPaths

동적라우팅 + GetStaticProps
SSG (Static Site Generation) 개념

빌드 타임때 정적으로 렌더링할 경로를 설정
동적라우팅시 라우팅 되는 경우의 수를 모두 집어넣어야 함

```
export const getStaticPaths = async () => {
  const res = await fetch('/videos')  // 침착맨 영상목록 더 가져옴
  const videos = await res.json()

  const paths = videos.map((video) => ({
    params: { id: video.id },
  }))

  return { 
    paths, // 빌드타임에 pre-render할 path목록
    fallback: false  // paths에 없는 path로 오면 404
  }
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`/videos/${params.id}`)
  const video = await res.json()

  return { props: { video }}
}
```

### GetServerSideProps

Page가 요청받을 떄 마다 호출되어 Pre-Rendering

SSR (Server Side Rendering)

Pre-render가 필요한 동적 데이터가 있는 페이지에 사용
